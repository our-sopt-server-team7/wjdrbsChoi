const mysql = require('promise-mysql');

const dbConfig = {
    host: 'RDS URI',
    port: 3306,
    user: 'admin',
    password: 'qwerty',
    database: 'test',
    dateString: 'date'
}

module.exports = mysql.createPool(dbConfig);
