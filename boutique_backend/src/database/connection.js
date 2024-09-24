const mysql     = require('mysql');
const dotenv    = require('dotenv');

dotenv.config();

const config   = {
    host            :   'localhost',
    user            :   'root',
    password        :   '',
    port            :   3306,
    database        :   'boutique'
};

const connection = mysql.createPool(config);

connection.getConnection(async (err, con) => {
    if(err) {
        console.log('Connection Error -> '+err);
    } else {
        console.log('Mysql '+con.state);
    } 
 });


module.exports = connection;
