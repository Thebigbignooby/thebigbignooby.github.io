var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  resolve: {
    extensions: ['', '.js', '.es6'],
  },

  entry: ['./app/app.module.js'],

  output: {
    path: path.resolve('dist'),
    publicPath: 'public/assets',
    filename: 'bundle.js'
  },

  plugins: [
    
  ],

  module: {
    preLoaders: [
      {
        test: /\.(js|es6)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.(es6|js)$/,
        exclude: /node_modules/,
        loader: "ng-annotate!babel-loader",
      },{
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader",
      },{
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader',
      },{
        test: /\.(img|png|ttf|eot|woff)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000',
      }
    ],
  },


  devServer: {
    contentBase: '',
  },
  watch: true,
}
