const mysql = require('mysql2');
require('dotenv').config();

var  connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host : process.env.DB_LOCALHOST,
    user : process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((error)=>{
    try {
        console.log("connected")
    } catch (error) {
        console.log(error);
    }
});

module.exports= connection;