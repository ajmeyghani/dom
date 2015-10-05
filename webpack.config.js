var resolve = require('path').resolve;
var webpack = require('webpack');
var env = process.env.NODE_ENV;

module.exports = {
  entry: {
    dom: resolve('./src/entry.js'),
    test: resolve('./specs.js')
  },
  output: {
    filename:  env === 'production' ? '[name].min.js' : '[name].js',
    path: resolve('./dist'),
    libraryTarget: 'umd',
    library: '[name]'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.coffee$/, loader: 'coffee' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ IS_PROD: process.env.NODE_ENV === "production" }),
    new webpack.DefinePlugin({ IS_TEST: process.env.NODE_ENV === "test" }),
    new webpack.DefinePlugin({ IS_DEV: process.env.NODE_ENV === undefined })
  ]
};