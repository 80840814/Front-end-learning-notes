const http = require('http')
const querystring = require('querystring')
const mysql = require('mysql')
const server = http.createServer((req, res) => {
    let postVal = ''
    req.on('data', (chunk) => {
        postVal += chunk
    })
    req.on('end', () => {
        let formVal = querystring.parse(postVal)
        let UserName = formVal.UserName
        let UserPwd = formVal.UserPwd
        //配置数据库
        let consection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'login',
            port: 3306
        })
        // 连接数据库
        consection.connect();
        consection.query('select * from user where name=? and password=?', [UserName, UserPwd], (err, results, fields) => {
            if (err) throw err
            if (results.length > 0) {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' })
                res.write('登录成功')
                res.end()
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' })
                res.write('登录失败')
                res.end()
            }
        })
        consection.end()
        // console.log(UserName, UserPwd);

    })
})

server.listen(8080)