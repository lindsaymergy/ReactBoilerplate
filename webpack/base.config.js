const webpack = require('webpack');
const path = require('path');

 module.exports = {
     target: "web",
     devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
     module: {
         loaders: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }
         ]
     }
 };