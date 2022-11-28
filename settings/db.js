const mysql = require('mysql');
const env = require('./../dbenv');


const connection = mysql.createConnection({
    host: env.HOST,
    user: env.DBUSER,
    password: env.DBPASSWORD,
    database: env.DBNAME
})

connection.connect((error) => {
    if (error) {
        return console.log('Error, connection wasn\'t established')
    } else {
        return console.log(`Connection to database was established. Happy hacking!`)
    }
});

module.exports = connection;