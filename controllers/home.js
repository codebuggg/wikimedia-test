const fs = require('fs');
const { getRequestData } = require("./../helpers/request");

const GET = (request, response) => {
  fs.readFile(__dirname + '/../views/index.html', function(error, data) {
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

const POST = (request, response, {dbConnection}) => {
  getRequestData(request, (data) => {
    const query = `\
      INSERT INTO donors\
      ( firstName, lastName, emailAddress,\
        phoneNumber, preferredContact, country,\
        city, state, streetAddress, postalCode,\
        paymentMode, donationFrequency, comments, createdAt\
      ) VALUES (\
        '${data.firstName||""}', '${data.lastName||""}', '${data.emailAddress||""}',\
        '${data.phoneNumber||""}', '${data.preferredContact||""}', '${data.country||""}',\
        '${data.city||""}', '${data.state||""}', '${data.streetAddress||""}',\
        '${data.postalCode||""}', '${data.paymentMode||""}', '${data.donationFrequency||""}',\
        '${data.comments||""}', '${new Date().getTime()}'\
      )\
    `;
    dbConnection.query(query, function (error, result) {
      if(error) {
        response.writeHead(404);  
        response.write(error);  
        response.end(); 
      }
      else {
        response.writeHead(301, {Location: `http://localhost:8000/confirmation?id=${result.insertId}`});
        response.end();  
      }
    });  
  })
}

const PUT = (request, response) => {

}

const PATCH = (request, response) => {

}

const DELETE = (request, response) => {

}

module.exports = {
  GET: GET,
  POST: POST,
  PUT: PUT,
  PATCH: PATCH,
  DELETE: DELETE,  
}