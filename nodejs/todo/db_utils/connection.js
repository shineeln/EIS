const mysql2 = require('mysql2');
require('dotenv').config();

console.log(process.env.DB_HOST)
const connection = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit:2,
}).promise()

module.exports = connection