const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = function (env, c) {
    console.log('env', env)
    console.log('c', c)
    return {
        mode: 'development',
        context: path.resolve(__dirname, '../src'), // 基础路径，绝对路径
        entry: {
            'index': './main.js' // 入口文件，相对路径，是基于context路径的
        },
        // entry: ['./main.js', './main1.js'], // 入口为数组的话，会将两个文件合并为一个
        output: {
            path: path.resolve(__dirname, '../dist'), // 绝对路径
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.js', '.vue']
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: '../index.html',  // 基于context
                filename: 'index.html' // 输出文件的名称，相对于output的路径
            }),
            new VueLoaderPlugin()
        ]
    }
}
