const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false, comments: false }),
  ],
}
