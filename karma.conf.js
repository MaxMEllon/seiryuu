const webpack = require('./webpack/config.test.js');

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['ava'],
    files: [
      'src/**/*.ts*',
      '**/__test__/*.ts*',
    ],
    exclude: [ ],
    preprocessors: {
      'src/**/*.ts*': ['webpack'],
      '**/__test__/*.ts*': ['webpack'],
    },
    reporters: ['dots'],
    plugins: [
      'karma-chrome-launcher',
      'karma-electron',
      'karma-ava',
      'karma-webpack',
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: process.env.CI ? ['Electron'] : ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    client: {
      useIframe: false,
    },
    webpack,
  });
};
