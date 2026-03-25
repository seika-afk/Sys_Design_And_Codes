const express= require("express")
const app =express()
const get_fn = require("./controllers/get")
const post_fn = require("./controllers/post")
const delete_fn= require("./controllers/delete")
const put_fn = require("./controllers/put")


//using json 
app.use(express.json());


//route 
app.get('/',(req,res)=>{

console.log("You have called the home route")
res.json({
	message:"Route hit",
	status:"success"

})
})


//crud
app.get('/user',get_fn)
app.post('/user',post_fn)
app.put('/user',put_fn)
app.delete('/user',delete_fn)


//starting at 3000 for postcli 
app.listen(3000,()=>{
	console.log("STARTING REST API AT : http://localhost:3000")

})
