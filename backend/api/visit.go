package api

import (
	"backend/security"
	"net"

	"encoding/json"
	"net/http"
	"time"

	"cloud.google.com/go/firestore"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
)

type Visit struct {
	ID      string    `json:"id,omitempty"`
	Created time.Time `json:"created"`
}

func RegisterVisit(w http.ResponseWriter, r *http.Request, client *firestore.Client) {
	ctx := r.Context()

	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		http.Error(w, "internal server error - split", http.StatusInternalServerError)
		return
	}

	id, err := security.GetObfuscatedString(host)
	if err != nil {
		http.Error(w, "internal server error - ob", http.StatusInternalServerError)
		return
	}

	newVisit := Visit{
		ID:      id,
		Created: time.Now(),
	}

	if r.Header.Get("Origin") == "https://filipwennerdahl.github.io" {
		visit := client.Collection("visits").Doc(newVisit.ID)

		_, err = visit.Create(ctx, newVisit)
		if err != nil {
			if grpc.Code(err) != codes.AlreadyExists {
				http.Error(w, "failed to register visit", http.StatusInternalServerError)
				return
			}
		}
	}

	newVisit.ID = ""
	json.NewEncoder(w).Encode(newVisit)
}
