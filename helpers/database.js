const mysql = require('mysql2');

module.exports = {
  query: (_query, cb) => {
    try {
      const connection = mysql.createConnection({
        connectionLimit: 1000,
        user: "root",
        password: "secret",
        database: "registration",
        port: process.env.PORT
      })
      connection.query(_query, cb);
    }
    catch(err) {
      cb(err)
    }
  }
}
