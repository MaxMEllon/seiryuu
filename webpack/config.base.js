const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: [ 'electron', 'fs', 'net', 'tls' ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: { loader: 'ts-loader' }
      },
      {
        test: /\.css?/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[name]-[hash:base64:5]',
            'postcss-loader',
          ],
        }),
      }
    ]
  },
  plugins: [
    new Dotenv({ path: `${__dirname}/.env` }),
    new ExtractTextPlugin('bundle.css'),
  ]
}
