const {parse} = require("querystring");
const url = require('url');

const getRequestData = (request, cb) => {
  const FORM_URLENCODED = 'application/x-www-form-urlencoded';

  if(request.headers['content-type'] === FORM_URLENCODED) {
    let body = '';
    
    request.on('data', chunk => {
      body += chunk.toString();
    });

    request.on('error', (err) => {
      // This prints the error message and stack trace to `stderr`.
      console.error({err});
    });

    request.on('end', () => {
      cb(parse(body));
    });
  }
  else {
    cb(null);
  }
}

const getRequestQuery = (request, cb) => {
  cb(url.parse(request.url, true).query)
}

module.exports = {
  getRequestData,
  getRequestQuery
}