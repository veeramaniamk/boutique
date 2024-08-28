const mysql     = require('mysql');
const dotenv    = require('dotenv');

dotenv.config();

const config   = {
    host            :   'localhost',
    user            :   'tunetutu_veeramani',
    password        :   'veeramani2#$2001',
    port            :   3306,
    database        :   'tunetutu_boutique'
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
