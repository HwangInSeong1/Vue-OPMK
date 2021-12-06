var express = require('express');
const app = require('../../app');
const knex = require('../../model/userModel');
var router = express.Router();

router.post('/user/duplicateCheck', function (req, res, next) {
    let body = req.body;
    let insert = {
        user_email: body.userid,
        user_pw: body.password,
        user_name: body.name,
        phone_no: body.phone,
        user_gender: body.gender,
        user_birth: body.birth,
    };

    let result = knex('USER_INFO').insert(insert).then(r=>{
        res.send(r);
    });
});

module.exports = router;