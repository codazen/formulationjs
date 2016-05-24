const path = require('path');
const webpack = require('webpack');

const nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'formulation-0.1.0.js',
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
