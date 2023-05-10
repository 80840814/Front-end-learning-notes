var mysql = require('mysql')
var db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'cms'
})
db.connect();
module.exports=db;