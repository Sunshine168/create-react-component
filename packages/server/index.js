const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('../webpack/webpack.dev')

const PORT = process.env.PORT ? process.env.PORT : 3000

const app = express()
const compiler = webpack(webpackConfig)

const BUILD_PATH = path.resolve(__dirname, '../public')

app.engine('.html', require('ejs').__express)

app.set('views', BUILD_PATH)
app.set('view engine', 'html')

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(express.static(BUILD_PATH))

app.get('/', (req, res) => {
  res.render(BUILD_PATH)
})

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}! \n`)
})
