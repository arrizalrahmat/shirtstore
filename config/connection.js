const { Client } = require('pg');

const client = new Client({
    host: 'ec2-34-194-14-176.compute-1.amazonaws.com',
    port: 5432,
    database: 'dddc5slfjk0sj',
    user: 'lpaguthtnfozff',
    password: '89393c66e789c2c7954efde235a9a64a8a9964fa21dde562a69417346d48c1f5',
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 2000,
    max: 200,
});
client.connect()

module.exports = client;
