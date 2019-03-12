const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Webpack = require('webpack')

// webpack 导出一个函数时，规定的两个变量的书写方法
module.exports = function (env, c) {
    // console.log('env', env)
    // console.log('c', c)
    return {
        mode: 'development',
        context: path.resolve(__dirname, '../src'), // 基础路径，绝对路径
        entry: {
            'index': './main.js' // 入口文件，相对路径，是基于context路径的
        },
        // entry: ['./main.js', './main1.js'], // 入口为数组的话，会将两个文件合并为一个
        output: {
            path: path.resolve(__dirname, '../dist'), // 绝对路径
            chunkFilename: '[name].[chunkhash].js'
        },
        resolve: {
            extensions: ['.js', '.vue'], // 配置扩展名
            alias: {
                '@': './src'
            }
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        process.env.NOED_ENV !== 'developemnt' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                        'css-loader',
                        'postcss-loader'  
                ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: 'imgs/[name].[ext]'
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: '../index.html',  // 基于context
                filename: 'index.html' // 输出文件的名称，相对于output的路径
            }),
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new CleanWebpackPlugin()
        ],
        optimization: {
            splitChunks: {
                chunks: 'async',
                minSize: 1,
                // minChunks: 1,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    },
                    common: {
                        minChunks: 2,
                        name: 'commons',
                        chunks: 'initial'
                    }
                }
            }
        }
    }
}
