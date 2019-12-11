const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const clientBase = {
  // Tell webpack the root file of our server application
  entry: './src/client/client.js',

  // Tell webpack where it should output the generated bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, clientBase)
