const fs = require('fs');
const { parse } = require('querystring');
const { getRequestQuery } = require("./../helpers/request");

const GET = (request, response, {dbConnection}) => {
  getRequestQuery(request, (data) => {
    const query = `
      SELECT *
      FROM donors
      WHERE id = ${data.id||"1"}
    `;
    dbConnection.query(query, function (error, result) {
      if(error || result.length < 1) {
        response.writeHead(404);  
        response.write(error);  
        response.end(); 
      }

      else {
        response.writeHead(200, {  
          'Content-Type': 'application/json'  
        });
        response.write(JSON.stringify(result[0]));
        response.end();  
      }
    });  
  })
}

const POST = (request, response) => {

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