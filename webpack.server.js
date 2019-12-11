const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const serverBase = {
  // Inform webpack that we are building a bundle for nodeJS
  // rather than for the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/server/server.js',

  // Tell webpack where it should output the generated bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Tells webpack not to bundle any libraries into out output bundle on the server
  // if that library exists in the node_modules folder
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, serverBase)
