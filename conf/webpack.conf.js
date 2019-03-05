const path = require('path')
// 将脚本或者样式自动添加到HTML中的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // webpack运行的模式，有两种，'prduction' 和 'development' 也可在命令行里面 --mode prduction/development 使用
    mode: 'development', 
    entry: './src/main.js',
    output: {
        // 打包后的文件名，目录相对于output的path
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    // 在这里引入所需要的插件
    plugins: [
        new HtmlWebpackPlugin({
            // 打包后的HTML文件，路径是相对于output中的path
            filename: 'index.html',
            // 这个是需要进行打包处理的HTML文件，路径相对于当前运行的路径，一般来说是根目录
            template: 'index.html'
            
        }),
        new VueLoaderPlugin()
    ],
    // module一般是处理模块的属性，文件的loader引用都在这里面进行添加
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    // 解析 一般用文件的解析，比如文件路径的查找，文件的别名，文件后缀的是否需要等等
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.vue', '.js']
    }
}