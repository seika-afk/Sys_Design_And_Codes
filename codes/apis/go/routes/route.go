package routes

import(
	
	"api_go/controllers"
	"github.com/gorilla/mux"
	
)


func Register(r *mux.Router){
r.HandleFunc("/user",controllers.Getfn).Methods("GET")

r.HandleFunc("/user",controllers.Postfn).Methods("POST")

r.HandleFunc("/user",controllers.Putfn).Methods("PUT")

r.HandleFunc("/user",controllers.Deletefn).Methods("DELETE")


}
