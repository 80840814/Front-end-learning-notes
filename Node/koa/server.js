const Koa = require("koa")//引入koa
const router = require('koa-router')()
const static = require('koa-static')
const views = require('koa-views')
const nunjucks = require('nunjucks')
const parser = require('koa-parser')//使用parser获取post参数
const app = new Koa()//创建应用
app.use(parser())

//引入一个中间件，中间件是一个函数
// app.use(async (ctx) => {
//     ctx.body = 'adsadasd'
// })
app.use(views(__dirname + '/views', {
    map: {
        html: 'nunjucks'
    }
}))
app.listen(3000, () => {
    console.log('server is running');
})


//router
app.use(static(__dirname + '/public'))//引入静态资源
app.use(router.routes())  //在koa里引入router


router.get('/', async (ctx) => {
    let stls = ["demi", 'lici', 'decd', 'dede']
    await ctx.render('index.html', {
        stls,
        isLogin: false,
        username: "amdinasd"

    })
})
router.get('/about', async (ctx) => {
    await ctx.render('about', { title: 'about' })
})
router.get('/demo3', async (ctx) => {
    await ctx.render('demo3', {})
})

// get方法
router.get('/login', async (ctx) => {
    let username = ctx.query.username;
    let password = ctx.query.password;
    await ctx.render('home', { username, password })
})

// query可以接get请求的数据,不能接到post数据
// post方法
// router.post('/login', async ctx => {
//     let username = ctx.request.body.username;
//     let password = ctx.request.body.password;
//     await ctx.render('home', { username, password })
// })
router.post('/login', async ctx => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if (username == 'admin') {
        if (password == '123456') {
            await ctx.render('success', { content: 'success' })
        } else { await ctx.render('fail', { content: 'fail' }) }
    } else {
        await ctx.render('fail', { content: 'fail' })
    }
})