const webpack = require('webpack');
const config = require('./config.base')

config.devtool = 'inline-source-map';

config.externals.push('mocha')

module.exports = config;
