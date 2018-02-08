Registration = require("./lib/registration");

var regResult = {};
args = {
  email: "coralchen@gmail.com",
  password: "goofy",
  confirm: "goofy"
};
regResult = Registration.applyForMembership(args);

console.log(regResult);
