function delete_fn(req,res){

	console.log("CALLED DELETE REQUEST")
res.json({
	message:"User route hit :: delete",
	status:"success"

})

}



module.exports=delete_fn

