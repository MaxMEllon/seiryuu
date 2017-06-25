const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:3000',
      './src/index.tsx',
    ],
  },
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
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
    new ExtractTextPlugin('bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  }
}
