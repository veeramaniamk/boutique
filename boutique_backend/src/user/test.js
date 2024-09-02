const mysql = require('../database/connection');

const test = (req, res) => {

    const query = `INSERT INTO test(name) VALUES ('name3')`;

    mysql.query(query, (err, result) => {
        if(err) return res.send({error:err});
        return res.send({result:result});
    })

}

module.exports = test;
