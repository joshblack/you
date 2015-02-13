var webpack = require('webpack');

module.exports = {
  entry: [
    './scripts/bundle'
  ],
  output: {
    path: __dirname + '/scripts/',
    filename: 'bundle.min.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.optimize.DedupePlugin()
  ]
};