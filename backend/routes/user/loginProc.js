// 로그인 인증
var express = require('express');
const app = require('../../app');
const knex = require('../../model/userModel');
var router = express.Router();

router.post('/user/loginProc', function (req, res, next) {
    const userEmail = req.body.userEmail;
    const userPw = req.body.userPw;

    let dbPw = '';
    let resultData = knex('USER_INFO').where({user_email: userEmail}).select('user_pw').then(result=>{
        let row = Object.values(JSON.parse(JSON.stringify(result)))
        dbPw = row[0].user_pw;
        console.log(dbPw, '비번')
        console.log(userPw, '입력비번')
        if(dbPw == userPw) {
            req.session.authenticate = true;
            res.status(200).send({code: 1, msg:'로그인 성공'});
        } else {
            res.status(200).send({code: 2, msg:'로그인 실패'});
        }
    });
    
});

module.exports = router;