const express= require("express")
const app= express()
const createUser= require("services/addUserService")
app.use(express.json());

// load events
require("./events/userEvents");

//just the uh event architecture no REST 

function create_user(name){

createUser(name)
}
app.listen(3000,()=>{
console.log("Server running at : 3000")

})

