// 引入webpack 处理html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: {
        main: './src/index.js'
    },
    // 出口
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    // 配置loaders
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/dist',
        host: 'localhost',
        port: 4000,
        open: true
    },
    // 配置本地服务器

    // 使用插件
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './public/index.html'
        })
    ]
}