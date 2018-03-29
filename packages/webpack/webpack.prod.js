const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const HotMiddleWareConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    libraryTarget: 'umd',
  },
  mode: 'production',
  externals: ['react'],
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new UglifyJSPlugin()],
}
