const webpack = require('webpack');
const path = require('path');

 module.exports = {
     entry: [ 'babel-polyfill' ],
     devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
     module: {
         loaders: [
            {
                test: /\.js?$/,
                use: [
                    'babel-loader',
                    //'eslint-loader'
                ],
                exclude: /(node_modules|bower_components)/
            }
         ]
     }
 };