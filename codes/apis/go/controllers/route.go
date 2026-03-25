package controllers


import (
	"fmt"
	"net/http"
	 "encoding/json"

)

func Getfn(w http.ResponseWriter,r *http.Request){
	
	w.Header().Set("Content-Type", "application/json")

	response := map[string]string{
		"message": "GET REQUEST RECEIVED",
	}

	fmt.Println("GET")
	json.NewEncoder(w).Encode(response)
}


func Postfn(w http.ResponseWriter,r *http.Request){
	
	w.Header().Set("Content-Type", "application/json")

	response := map[string]string{
		"message": "POST REQUEST RECEIVED",
	}

	fmt.Println("POST")
	json.NewEncoder(w).Encode(response)
}
func Putfn(w http.ResponseWriter,r *http.Request){
	
	w.Header().Set("Content-Type", "application/json")

	response := map[string]string{
		"message": "PUT REQUEST RECEIVED",
	}

	fmt.Println("PUT")
	json.NewEncoder(w).Encode(response)
}
func Deletefn(w http.ResponseWriter,r *http.Request){
	
	w.Header().Set("Content-Type", "application/json")

	response := map[string]string{
		"message": "DELETE REQUEST RECEIVED",
	}

	fmt.Println("DELETE")
	json.NewEncoder(w).Encode(response)
}

