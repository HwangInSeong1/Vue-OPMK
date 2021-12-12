'use strict';

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '3.36.93.66',
      user : ('보안'),
      password : '보안',
      database : 'OPMK'
    }
});

module.exports = knex;