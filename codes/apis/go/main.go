package main


import (
"api_go/routes"

"net/http"
"log"
"github.com/gorilla/mux"
)


func main(){
	//setting up routes
	r:=mux.NewRouter()
	routes.Register(r)

	//starting server

	log.Println("Server Started At http://localhost:3000")
	log.Fatal(http.ListenAndServe("localhost:3000",r))





}

