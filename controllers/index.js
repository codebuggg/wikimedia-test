const fs = require('fs');
const url = require('url');

const homeController = require("./home");
const confirmationController = require("./confirmation");
const dataController = require("./data");

const routesMap = {
  "/": homeController,
  "/home": homeController,
  "/confirmation": confirmationController,
  "/data": dataController
}

const isValidRoute = _route => Object.keys(routesMap).includes(_route)

const controller = (dbConnection) => (request, response) => {
  const path = url.parse(request.url).pathname;
  
  if(isValidRoute) {
    // handling routes
    console.log({path})
    routesMap[path][request.method](request, response, {dbConnection})
  }
  else {
    // handling 4040 routes
    response.writeHead(404);  
    response.write("404- Whoops! Page not found!");  
    response.end();
  }
};

module.exports = controller;