const path = require('path');
const webpack = require('webpack');
const pack_json = require('./package.json');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeModulesPath = path.join(__dirname, 'node_modules');

const version = pack_json.version;
const file_name = 'formulation-' + version + '.js';
const css_fn = 'formulation-' + version + '.css';
const STYLES_PATH = './src/components/styles/';

module.exports = {
  entry: [
    './src/index.js',
    STYLES_PATH + 'Checkbox.less',
    STYLES_PATH + 'Container.less',
    STYLES_PATH + 'DatePicker.less',
    STYLES_PATH + 'Dropdown.less',
    STYLES_PATH + 'Form.less',
    STYLES_PATH + 'Textarea.less',
    STYLES_PATH + 'Textbox.less'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: file_name,
    publicPath: '/',
    version: version
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin(css_fn, {allChunks: true})
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
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  }
};
