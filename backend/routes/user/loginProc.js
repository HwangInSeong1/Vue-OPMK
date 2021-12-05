// 로그인 인증

var express = require('express');
const app = require('../../app');
var router = express.Router();

router.post('/user/loginProc', function (req, res, next) {
    let body = req.body;
    console.log(body);
    res.send('성공');
});

module.exports = router;