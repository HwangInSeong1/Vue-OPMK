// 로그인 인증

var express = require('express');
const app = require('../../app');
const knex = require('../../model/userModel');
var router = express.Router();


router.post('/user/signUpProc', function (req, res, next) {
    let body = req.body;

    let result = knex('USER_INFO').then(r=>{
        res.send(r);
    });
});

module.exports = router;