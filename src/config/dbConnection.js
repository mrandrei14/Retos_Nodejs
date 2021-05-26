const mysql = require('mysql');

module.exports = () => {

    return mysql.createConnection({
        host: 'begmy2amaxeesxt8vdhy-mysql.services.clever-cloud.com',
        user: 'u4qvdkzd9d6aakze',
        password: 'ofR6DOUjoVJDYfiE6I13',
        database: 'begmy2amaxeesxt8vdhy',
        port: '3306'
    })

}