package api

import (
	"encoding/json"
	"net/http"
	"time"

	"cloud.google.com/go/firestore"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
)

type Comment struct {
	Author  string    `json:"author"`
	Content string    `json:"content"`
	ID      string    `json:"id,omitempty"`
	Owner   bool      `json:"owner"`
	Created time.Time `json:"created"`
}

func GetComments(w http.ResponseWriter, r *http.Request, client *firestore.Client) {
	ctx := r.Context()
	id := r.FormValue("id")

	query := client.Collection("comments").OrderBy("Created", firestore.Desc).Limit(15)

	docs, err := query.Documents(ctx).GetAll()
	if err != nil {
		http.Error(w, "failed to get documents", http.StatusInternalServerError)
		return
	}

	var comments []Comment
	var comment Comment
	for _, doc := range docs {
		if err := doc.DataTo(&comment); err != nil {
			http.Error(w, "failed to get comment", http.StatusInternalServerError)
			return
		}
		comment.Owner = id == comment.ID
		comment.ID = ""
		comments = append(comments, comment)
	}

	json.NewEncoder(w).Encode(comments)
}

func PostComment(w http.ResponseWriter, r *http.Request, client *firestore.Client) {
	ctx := r.Context()

	var req Comment
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "unsupported comment format", http.StatusBadRequest)
		return
	}

	newComment := Comment{
		Author:  req.Author,
		Content: req.Content,
		ID:      req.ID,
		Created: time.Now(),
	}

	comment := client.Collection("comments").Doc(newComment.ID)

	_, err := comment.Create(ctx, newComment)
	if err != nil {
		if grpc.Code(err) != codes.AlreadyExists {
			http.Error(w, "failed to create comment", http.StatusInternalServerError)
			return
		}

		_, err = comment.Update(ctx, []firestore.Update{
			{Path: "Author", Value: newComment.Author},
			{Path: "Content", Value: newComment.Content},
			{Path: "Created", Value: newComment.Created},
		})
		if err != nil {
			http.Error(w, "failed to update comment", http.StatusInternalServerError)
			return
		}
	}

	newComment.Owner = true
	newComment.ID = ""
	json.NewEncoder(w).Encode(newComment)
}

func DeleteComment(w http.ResponseWriter, r *http.Request, client *firestore.Client) {
	ctx := r.Context()
	id := r.FormValue("id")

	comment := client.Collection("comments").Doc(id)
	_, err := comment.Delete(ctx)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
