'use strict';
var sql = require('./db.js');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};


Task.getUserInfo = function (result) {
    sql((err, connection) => {
        if (err) {
            console.log(' db연결 에러입니다.');
            result(err, null);
        }

        connection.query('select * from USER_INFO', function (e, res) {
            if (e) {
                result(e, null);
            } else {
                result(null, res);
            }
        });
        connection.release();
    });
}

Task.getTaskById = function (taskEmail, result) {
    sql((err, connection) => {
        if (err) {
            console.log('connection error', error);
            result(err, null);
        }
        connection.query('Select task from USER_INFO where user_email = ? ', taskEmail, function (e, res) {
            if (e) {
                console.log('error: ', e);
                result(e, null);
            } else {
                result(null, res);
            }
        });
        connection.release();
    });
};

module.exports = Task;