const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

 module.exports = {
     entry: './src/main.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[name].js'
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
     stats: {
         colors: true
     },
     devtool: 'source-map',
     plugins: [
        new extractTextPlugin('styles.css')
     ]
 };