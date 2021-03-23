const fs = require('fs');

const GET = (req, response) => {
  fs.readFile(__dirname + '/../views/confirmation.html', function(error, data) {  
    if(error) {  
      response.writeHead(404);  
      response.write(error);  
      response.end();  
    }
    else {  
      response.writeHead(200, {  
        'Content-Type': 'text/html'  
      });  
      response.write(data);  
      response.end();  
    }  
  }); 
}

const POST = (req, res) => {

}

const PUT = (req, res) => {

}

const PATCH = (req, res) => {

}

const DELETE = (req, res) => {

}

module.exports = {
  GET: GET,
  POST: POST,
  PUT: PUT,
  PATCH: PATCH,
  DELETE: DELETE,  
}