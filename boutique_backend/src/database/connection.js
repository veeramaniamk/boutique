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
        console.log('Mysql Connection Error -> '+err);
    } else if(con.state === 'disconnected') {
        console.log(`Database connection failed. Check that its running and that your configuration is correct`);
    } else {
        console.log('Mysql '+con.state);
    } 
 });


module.exports = connection;
