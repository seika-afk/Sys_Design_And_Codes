const db = require("../db_/db");
const eventBus = require("../events/eventBus");
function createUser(user){
	db.users.push(user);

	eventBus.emit("USER_CREATED",user);
	return user 


}
module.exports = {createUser}
