const path = require('path');
const webpack = require('webpack');
const pack_json = require('./package.json');

const nodeModulesPath = path.join(__dirname, 'node_modules');

const version = pack_json.version;
const file_name = 'formulation-' + version + '.js';
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: file_name,
    publicPath: '/',
    version: version
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
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, '..', 'src'),
          path.join(__dirname, '../..', 'src')
        ]
      },
      {
        test: /\.json?$/,
        loaders: ['json'],
        include: path.join(__dirname, 'src', 'forms')
      },
      {
        test: /\.less$|\.css$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  }
};
