// connect to database
const mysql = require('mysql12');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ninjas',
    database: 'employeeTracker'

});

module.exports = connection;