const webpack = require('webpack');
const config = require('./config.base');

config.entry = {
  app: './src/renderer/index.tsx',
};

const defPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
});

config.plugins.push(defPlugin);
config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
config.plugins.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: false, comments: false }));
config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

module.exports = config;
