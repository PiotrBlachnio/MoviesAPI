const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './dist/server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  mode: 'production',
  node: {
    __dirname: true
  }
};