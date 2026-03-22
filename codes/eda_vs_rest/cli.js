const { createUser } = require("./services/addUserService");

require("./events/userEvents");

const args = process.argv.slice(2);

if (args[0] === "create-user") {
  const name = args[1];

  if (!name) {
    console.log("Name required");
    process.exit(1);
  }

  createUser(name);
}
