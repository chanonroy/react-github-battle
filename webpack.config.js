var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var BASE_DIR = path.resolve(__dirname);
var SRC_DIR = path.resolve(__dirname, './src');
var DIST_DIR = path.resolve(__dirname, './dist');

module.exports = {
    entry: {
      main: path.join(SRC_DIR, './index.js'),
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js' // '[name].[hash].js'
    },
    module: {
      loaders: [
        {
          // JavaScript Loaders
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          // Style Loaders (Sass, PostCSS)
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
              use: [
                { loader: "css-loader?minimize" }, // css-loader?minimize
                { loader: "postcss-loader",
                  options: { plugins() { return [require('autoprefixer')({
                      browsers: ['last 3 versions']
                    })]; }
                  }
                },
                { loader: "sass-loader" }
              ],
              fallback: "style-loader"
          }),
        },
        {
          // Image Assets
          test: /\.(png|jpg|jpeg|gif|ico)$/,
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]'
          },
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
        new ExtractTextPlugin({
          filename: "css/[name].css", // [name].[contenthash].css
        }),
    ],

    devServer: {
      stats: 'errors-only'
    },

};
