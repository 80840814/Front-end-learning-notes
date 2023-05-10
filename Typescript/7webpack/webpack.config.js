const path = require('path')

module.exports = {
    //程序打包的起点即入口文件
    entry: './src/index.ts',

    //配置 webpack 如何去输出,webpack 会将打包到一个文件中，从而减少网络请求
    output: {
        //最终编译文件与目录
        filename: 'app.js',
        //输出目录的绝对路径，所以要使用 path 模块的 resolve 方法处理,node.js已经内置了path模块
        //参数一__dirname为当前文件的路径，参数二dist为与参数一组合后的目录
        path: path.resolve(__dirname, 'public/dist'),
        //使用webpack-dev-server运行编译时，即热更新时的静态文件前缀
        //因为编译内容是存在内存中的，不会真正创建文件，设置publicPath值决定以什么路径引用文件
        //值是相对于 public/index.html 的路径，需要以 / 结尾
        //需要安装 webpack-dev-server
        publicPath: '/dist/',
    },

    //项目中的不同类型模块的处理规则
    module: {
        rules: [
            {
                //test定义文件检测，满足后才处理，下面定义文件是否为 ts 或tsx，则满中本规则，然后进行处理
                test: /\.tsx?$/,
                //use定义处理器，下面是使用 ts-loader 将 ts或 tsx 文件编译成 javascript
                use: 'ts-loader',
                //exclude排除node_modules 目录中的文件处理
                exclude: /node_modules/,
            },
        ],
    },

    //配置模块如何解析
    resolve: {
        //在使用 import Hd from Util 等代码时，如果不添加扩展名，webpack 按以下扩展名顺序匹配文件
        extensions: ['.tsx', '.ts', '.js'],
    },
}