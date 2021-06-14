package main

import (
	"backend/api"
	"backend/security"

	"net"
	"net/http"
	"sync"

	"cloud.google.com/go/firestore"
	"github.com/gorilla/mux"
	"golang.org/x/time/rate"
	"google.golang.org/api/option"
)

type Endpoint func(w http.ResponseWriter, r *http.Request, client *firestore.Client)

func main() {
	handleRequests()
}

func handleRequests() {
	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/api/comments", requestHandler(api.GetComments)).Methods(http.MethodGet)
	router.HandleFunc("/api/comments", requestHandler(api.PostComment)).Methods(http.MethodPost, http.MethodOptions)
	router.HandleFunc("/api/comments", requestHandler(api.DeleteComment)).Methods(http.MethodDelete)
	router.HandleFunc("/api/visit", requestHandler(api.RegisterVisit)).Methods(http.MethodPost)

	http.ListenAndServe(":8080", limit(router))
}

func requestHandler(fn Endpoint) http.HandlerFunc {
	httpHandler := func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()

		client, err := firestore.NewClient(ctx, security.PROJECT, option.WithCredentialsFile(security.TOKEN))
		if err != nil {
			http.Error(w, "failed to create client", http.StatusInternalServerError)
			return
		}

		defer client.Close()

		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
		} else {
			fn(w, r, client)
		}
	}

	return httpHandler
}

// Code below taken from here: https://www.alexedwards.net/blog/how-to-rate-limit-http-requests
var visitors = make(map[string]*rate.Limiter)
var mu sync.Mutex

func getVisitor(ip string) *rate.Limiter {
	mu.Lock()
	defer mu.Unlock()

	limiter, exists := visitors[ip]
	if !exists {
		limiter = rate.NewLimiter(1, 3)
		visitors[ip] = limiter
	}

	return limiter
}

func limit(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ip, _, err := net.SplitHostPort(r.RemoteAddr)
		if err != nil {
			http.Error(w, "internal server error", http.StatusInternalServerError)
			return
		}

		limiter := getVisitor(ip)
		if limiter.Allow() == false {
			http.Error(w, "too many requests", http.StatusTooManyRequests)
			return
		}

		next.ServeHTTP(w, r)
	})
}
