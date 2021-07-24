const express = require("express");
const app = express();
var jwt = require("jsonwebtoken")

app.use(express.json());

var knex = require('./Database/db')

const PORT = process.env.PORT || 2022;

var signup = express.Router();
app.use("/",signup);
require("./Routes/signup")(signup,jwt,knex);


// route to login.js
var login = express.Router();
app.use("/", login);
require("./Routes/login")(login, jwt, knex);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})