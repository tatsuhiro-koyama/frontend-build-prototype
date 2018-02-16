'use strict';

const webpack = require('webpack');
const saveLicense = require('uglify-save-license');
const Visualizer = require('webpack-visualizer-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  devtool: 'source-map',
  devServer: {
    contentBase: 'distribution',
    port: 3000
  },
  entry: {
    index: './src/javascripts/index.js'
  },
  externals: [
    // {
    //   externallib: 'externallib'
    // }
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    library: 'proto',
    libraryTarget: 'umd',
    filename: './distribution/javascripts/[name].bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'public/',
        to: './distribution'
      }
    ]),
    new Visualizer({
      filename: './reports/statistics/model.html'
    }),
    // minify, obfuscation
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      output: {
        comments: saveLicense
      }
    }),
    new webpack.ProvidePlugin({
      Promise: 'bluebird'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
