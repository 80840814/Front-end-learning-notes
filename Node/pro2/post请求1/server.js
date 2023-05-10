const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    // req.on('data')每次发送的数据
    // res.end('data')数据发送完成
    let postVal = ''
    req.on('data', (chunk) => {
        postVal += chunk
    })
    req.on('end', () => {
        console.log(querystring.parse(postVal));
        res.end();
    })

})
server.listen(8080)