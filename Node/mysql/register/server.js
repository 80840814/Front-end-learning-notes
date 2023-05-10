const http = require('http')
const querystring = require('querystring')
const mysql = require('mysql')
const { write } = require('fs')
const server = http.createServer((req, res) => {
    if (req.url != '/favicon.ico') {
        let postVal = ''
        req.on('data', (chunk) => {
            postVal += chunk
        })
        req.on('end', () => {
            let formValue = querystring.parse(postVal)
            let UserName = formValue.UserName
            let UserPwd = formValue.UserPwd
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'login',
                port: 3306
            })
            connection.connect();
            connection.query('insert into user value(?,?,?)', [0, UserName, UserPwd], (err, results, fields) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-type': 'text/html;charset=utf8' })

                res.write('注册成功 ')
                res.end()
            })
            connection.end();
        })
    }

    // const postVal = res.require((err, results, fiedts) => {
    //     console.log(results);
    //     res.end()
    // })

})
server.listen(8080)