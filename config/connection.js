const mysql = require('mysql2');
let connection;

if (process.env.NODE_ENV === 'production') {
  connection = mysql.createConnection(process.env.JAWSDB_URL).promise();
} else {
  connection = mysql.createConnection({
    host: 'x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'qc1548s7hzwui3z3',
    password: 'crmg6n0rr04zep3s',
    database: 'qtoqidubvpmff09f',
  }).promise();
}
module.exports = connection;
