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
        devServer: {
            proxy: {
                proxyTable: {
                    '/api': {
                      // target: 'http://172.30.2.13:8080/mbp-gateway', // 开发接口
                      // target: 'http://172.30.2.71:8880/',
                      // target: 'http://172.30.2.165:8880/', // 开发环境
                      target: 'http://mock.eolinker.com/vv6VtUW77cda0d478183d59656cd5777e9250f4c80b4a4c?uri=getresult', // 测试环境
                      // target: 'http://172.30.50.127:8080', // 王子斌本地
                      // target: 'http://172.30.50.107:8080', // 蔡鸿铭本地
                      changeOrigin: true,
                      pathRewrite: {
                                  '^/api': ''
                              }
                    }
                }
            }
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
            new CleanWebpackPlugin(),
            new Webpack.DllReferencePlugin({
                manifest: require(path.join('../', 'static', 'manifest.json'))
            })
        ],
        optimization: {
            splitChunks: {
                chunks: 'async',
                // minSize: 1,
                // minChunks: 1,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        priority: -10,
                        chunks: 'initial'
                    },
                    common: {
                        minChunks: 2,
                        name: 'commons',
                        priority: -20,
                        chunks: 'initial',
                        reuseExistingChunk: true
                    }
                }
            }
        }
    }
}
