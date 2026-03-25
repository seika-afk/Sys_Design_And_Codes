function put_fn(req,res){

	console.log("CALLED  PUT REQUEST")
res.json({
	message:"User route hit :: put",
	status:"success"

})

}



module.exports=put_fn


