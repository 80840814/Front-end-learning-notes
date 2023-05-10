const http = require('http')
const server = http.createServer((req, res) => {
    res.end('hellaaaaao,world')
})
server.listen(3000, () => {
    console.log(`server is running`);
})