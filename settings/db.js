const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'game_service'
})

connection.connect((error) => {
    if (error) {
        return console.log('Error, connection wasn\'t established')
    } else {
        return console.log(`Connection to database was established. Happy hacking!`)
    }
});

module.exports = connection