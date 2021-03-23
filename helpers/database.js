const mysql = require('mysql2');

module.exports = {
  query: (_query, cb) => {
    try {
      const connection = mysql.createConnection({
        connectionLimit: 1000,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
      })
      connection.query(_query, cb);
    }
    catch(err) {
      cb(err)
    }
  }
}
