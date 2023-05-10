const http = require('http')
// 将get请求获取到

const url = require('url')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const reqUrl = req.url
    // console.log(reqUrl);

    console.log(url.parse(reqUrl, true).query.title);

    const queryUrl = url.parse(reqUrl).query
    console.log(querystring.parse(queryUrl).id);

    res.end();
})
server.listen(8080)