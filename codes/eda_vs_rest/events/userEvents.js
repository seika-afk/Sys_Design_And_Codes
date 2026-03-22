const eventBus= require("./eventBus")

eventBus.on("USER_CREATED",(user)=>{
	console.log("1st listener")
console.log("MESSAGE RECIEVED : NEW USER IS ADDED",user)
console.log("####################################")
console.log("CALLING SERVICE SEND_GMAIL_TO_OTHERS ")

})


eventBus.on("USER_CREATED",(user)=>{
	console.log("2nd listener")
console.log("MESSAGE RECIEVED : NEW USER IS ADDED")
console.log("####################################")
console.log(" DOING SMTG ELSE/")

})
