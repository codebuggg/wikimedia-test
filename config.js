var mysql = require('mysql');

const connection = mysql.createConnection({
    connectionLimit: 1000,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("successfully connected to DB");
    const query = "\
    CREATE TABLE donors (\
        id INT AUTO_INCREMENT PRIMARY KEY,\
        firstName VARCHAR(255),\
        lastName VARCHAR(255),\
        emailAddress VARCHAR(255),\
        phoneNumber VARCHAR(255),\
        preferredContact ENUM('Phone', 'Email') NULL,\
        country VARCHAR(255) NULL,\
        city VARCHAR(255) NULL,\
        state VARCHAR(255) NULL,\
        streetAddress VARCHAR(255) NULL,\
        postalCode VARCHAR(255) NULL,\
        paymentMode ENUM('USD', 'Euro', 'BitCoin') NULL,\
        donationFrequency ENUM('Monthly', 'Yearly', 'One-Time') NULL,\
        comments VARCHAR(255) NULL,\
        createdAt VARCHAR(255)\
    )";
    connection.query(query, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});
