'use strict';

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '3.36.93.66',
      user : 'root',
      password : 'Cygnus970209@',
      database : 'OPMK'
    }
});

module.exports = knex;