'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const Setting = {};

const config = merge(baseConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'webpack.define.Setting': JSON.stringify(Setting)
    })
  ]
});

module.exports = config;
