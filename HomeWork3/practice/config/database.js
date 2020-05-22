const mysql = require('promise-mysql');

const dbConfig = {
    host: 'localhost:3306',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'test',
}

module.exports = mysql.createPool(dbConfig);
