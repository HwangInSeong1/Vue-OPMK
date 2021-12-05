//DB연결
'user strict';

const mysql = require('mysql');

const dbConfig = {
    host: '3.36.93.66',
    user: 'root',
    password: 'Cygnus970209@',
    database: 'OPMK'
}

const pool = mysql.createPool(dbConfig);

var getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    })
}

module.exports = getConnection;