const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(process.cwd(), 'src/index'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },

  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
      }
    ]
  }
}