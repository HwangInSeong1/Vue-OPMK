// 로그인 인증

var express = require('express');
const app = require('../../app');
const Task = require('../../model/userModel');
var router = express.Router();


router.post('/user/signUpProc', function (req, res, next) {

    Task.getUserInfo(function(err, task) {
        if (err) res.send(err);
        console.log('테스크! : ', task[1]);

        console.log('분해! : ', task[1].user_email);
    });

    let body = req.body;
    console.log(body);
    res.send(body);
});

module.exports = router;