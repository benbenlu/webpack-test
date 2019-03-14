const CleanWebpackPlugin = require('clean-webpack-plugin')
const Webpack = require('webpack')
const path = require('path')
console.log('__dirname', __dirname)

module.exports = {
  entry: ['vue', 'vue-router'],
  output: {
    path: path.resolve(__dirname, '../static'),
    filename: 'libiary[hash].js',
  },
  module: {

  },
  plugins: [
    new CleanWebpackPlugin(),
    new Webpack.DllPlugin({
      path: path.resolve(__dirname, '../static', 'manifest.json'),
      name: '_dll_manifest'
    })
  ]
}