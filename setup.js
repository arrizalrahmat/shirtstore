const db = require('./config/connection');

const creatShirtsTableQuery = `
CREATE TABLE shirts(
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    type VARCHAR(50) NOT NULL,
    size VARCHAR(10) NOT NULL,
    stock INTEGER NOT NULL
);
`;

db.query(creatShirtsTableQuery, (err, res) => {
    if (err) console.log(err);
    else console.log('Table Shirts successfully created!');
});

db.end();
