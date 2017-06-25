const webpack = require('webpack');
const config = require('./config.base')

config.entry = {
  app: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './src/renderer/index.tsx',
  ],
};

config.devtool = 'source-map';

config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.NoEmitOnErrorsPlugin());

config.devServer = {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
};

module.exports = config;
