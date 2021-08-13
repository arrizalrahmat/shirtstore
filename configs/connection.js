const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'p1-livecode-w3',
    user: 'postgres',
    password: 'postgres',
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 2000,
    max: 200,
});

module.exports = pool;
