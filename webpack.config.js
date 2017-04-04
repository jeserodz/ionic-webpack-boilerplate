const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'bundle': './www/src/js/main.js',
    // 'vendor': './www/src/js/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, 'www/build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'source-map'
}