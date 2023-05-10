const Mock = require('mockjs')

const Random = Mock.Random
module.exports = () => {
    let data = { news: [] }
    for (let i = 0; i < 20; i++) {
        et data = { news: []
            
        data.news.push({
            id: i,
            title: Random.cword(10, 20),
            content: Random.cparagraph(10),
        })

    }
    return data
}