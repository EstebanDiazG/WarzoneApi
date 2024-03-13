const pg = require('pg');
const pool = new pg.Pool({
    
    host:'localhost',
    user:'postgres',
    password:'A3bR8xK2jP',
    database: 'api_warzone',
    port: 5432
});


module.exports = pool;