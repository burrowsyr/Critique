const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  commonConfig = require('./webpack.common.js'),
  helpers = require('./helpers'),
  path = require('path');

module.exports = [
  webpackMerge({}, commonConfig, {
    target: 'web',
    devtool: 'cheap-module-eval-source-map',

    entry: {
      'app': './src/main.ts'
    },

    output: {
      path: helpers.root('dist', 'client'),
      publicPath: 'http://localhost:3080/',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    }
  }),
  webpackMerge({}, commonConfig, {
    target: 'node',
    entry: {
      'server': './src/server.ts'
    },
    output: {
      path: helpers.root('dist', 'server'),
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },
    externals: helpers.checkNodeImport,
    node: {
      global: true,
      __dirname: true,
      __filename: true,
      process: true,
      Buffer: true
    }
  })];
