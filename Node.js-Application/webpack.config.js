const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    publicPath: './',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  target: 'node',

  resolve: {
    extensions: ['.html', '.js']
  },
  module: {
    rules: [{}]
  }
};
