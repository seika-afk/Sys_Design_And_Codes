function get_fn(req,res){

	console.log("CALLED GET REQUEST")
res.json({
	message:"User route hit :: get",
	status:"success"

})

}



module.exports=get_fn
