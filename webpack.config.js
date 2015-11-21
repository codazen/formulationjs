const path = require('path');
const webpack = require('webpack');

const nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [nodeModulesPath],
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    root: nodeModulesPath
  },
  module: {
    loaders: [
      {
        test: /\.js?$|\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json?$/,
        loaders: ['json'],
        include: path.join(__dirname, 'dist')
      }
    ]
  }
};
