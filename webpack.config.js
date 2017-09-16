const webpack = require('webpack');
const path = require('path');

 module.exports = {
     entry: {
        server: './src/server',
        client: './src/client',
        init: './src/init'
    },
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[name].bundle.js'
     },
     module: {
         loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, 
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
         ]
     },
     devtool: 'source-map'
 };