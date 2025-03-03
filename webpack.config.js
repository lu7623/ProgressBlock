const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [ './index.js', path.join(__dirname, 'src', 'sass/main.scss')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  module: {
    rules: [
      {
       test: /\.(scss|css)$/,
        use: [ 
            MiniCssExtractPlugin.loader,  'css-loader', 'sass-loader'
           ],
     }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  'index.html',
      filename: 'index.html',
    }),
    new FileManagerPlugin({
               events: {
                 onStart: {
                   delete: ['dist'],
                 },
               },
             }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        }),
  ],
    devServer: {
       watchFiles: path.join(__dirname, 'src'),
        port: 9000,
      },
};