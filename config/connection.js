const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'shirtstore',
    user: 'postgres',
    password: 'l3montea',
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 2000,
    max: 200,
});

module.exports = pool;
