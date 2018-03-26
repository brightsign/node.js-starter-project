const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    publicPath: './',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  target: 'node',

  resolve: {
    extensions: ['.html', '.js']
  },
  externals: {
    '@brightsign/screenshot': 'commonjs @brightsign/screenshot'
  },
  module: {
    rules: [{}]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './*.html',
      to: '.'
    }]),
    new ZipPlugin({
      filename: 'node-server.zip'
    })
  ]
};
