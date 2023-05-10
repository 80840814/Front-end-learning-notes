const Mock = require('mockjs')

const Random = Mock.Random
module.exports = () => {
    let data = { article: [],user:[] }
    for (let i = 0; i < 20; i++) {
        data.article.push({
            id: i,
            title: Random.cword(10, 20),
            content: Random.cparagraph(100),
            
        })
        data.user.push({    
            id:i,       
            name: Random.word(4),
            
        })

    }
    return data
}