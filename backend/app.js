var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mysql = require("mysql");
var session = require("express-session");
var MySQLStore = require('express-mysql-session')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var loginRouter = require('./routes/user/loginProc');
var signUpRouter = require('./routes/user/signUpProc');

var app = express();

var options = {
    host: "3.36.93.66",
    port: 3306,
    user: "root",
    password: "Cygnus970209@",
    database: "OPMK",
};

var sessionStore = new MySQLStore(options);

app.use(
    session({
        key: "kidrian",
        secret: "kidriana",
        store: sessionStore,
        resave: false,
        saveUninitialized: false
    })
);
var connention = mysql.createConnection(options);
var sessionStore = new MySQLStore({}, connention);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/test', testRouter);
app.post('/user/loginProc', loginRouter);
app.post('/user/signUpProc', signUpRouter);


module.exports = app;
