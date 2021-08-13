const db = require('./config/connection');
const fs = require('fs');

const insertShirtQuery = `
INSERT INTO Shirts (name, type, size, stock)
VALUES($1, $2, $3, $4);
`;

fs.readFile('./shirts.json', 'utf8', (err, res) => {
    if (err) console.log(err);
    else {
        res = JSON.parse(res);
        res.forEach((el) => {
            db.query(insertShirtQuery, [el.name, el.type, el.size, el.stock], (err, res) => {
                if (err) console.log(err);
                else console.log('Seed data successfully inserted!');
            });
        });

        db.end();
    }
});
