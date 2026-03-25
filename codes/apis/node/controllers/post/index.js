function post_fn(req,res){

	console.log("CALLED  POST REQUEST")
res.json({
	message:"User route hit :: post",
	status:"success"

})

}



module.exports=post_fn

