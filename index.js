require('dotenv').config()

let http = require('http');
const dbConnection = require("./helpers/database");
const controllers = require("./controllers");
// require("./config")

http.createServer(controllers(dbConnection)).listen(8000); 



 
 
 
 
 
 
 
 
 
 
