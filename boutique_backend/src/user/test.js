
const mysql = require('../database/connection');

const test = (req, res) => {
    const query = `SELECT * FROM product_size`;

    fun(query, (err, result) => {
        if (err) {
            console.error(err);
        }
        return res.send({ result });
    });
}

const fun = (query, callback) => {
    mysql.query(query, (err, result) => {
        if (err) return callback(err, null);
        console.log(result);
        callback(null, result);
    });
}

module.exports = test;
