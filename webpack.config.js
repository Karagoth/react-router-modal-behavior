var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
        test: /\.css$/,
        loader: 'style-loader',
        include: path.join(__dirname, 'src')
    }, {
        test: /\.css$/,
        loader: 'css-loader',
        include: path.join(__dirname, 'src'),
        query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
        }
    }]
  }
};
