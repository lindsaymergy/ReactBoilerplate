
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    entry: {
        production: path.resolve(__dirname, '../src/prod')
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?importLoaders=1',
                    ],
                }),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // Extract imported CSS into own file
        new ExtractTextPlugin('[name].bundle.css'),
        // Minify JS
        new UglifyJsPlugin({
            sourceMap: false,
            compress: false,
        }),
        // Minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    devtool: 'cheap-module-source-map'
});