const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
    const reqUrl = req.url
    const formVal = url.parse(reqUrl, true).query

    console.log("账号是:" + formVal.UserName);
    console.log("密码是:" + formVal.UserPwd);
    res.end("用户名：" + formVal.UserName + "------->" + "密码：" + formVal.UserPwd)
})
server.listen(8080);