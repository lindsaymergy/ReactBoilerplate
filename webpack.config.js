const webpack = require('webpack');
const path = require('path');

 module.exports = {
     target: "web",
     entry: [
        //'webpack-dev-server/client?http://0.0.0.0:9000', // WebpackDevServer host and port
        //'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        //'./src/index'
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
        //'webpack-hot-middleware/client',
        //'./src/index'
        //server: './src/server',
        //client: './src/client',
        //init: './src/init'
        //init: ['./src/init', 'webpack/hot/only-dev-server', 'webpack-dev-server/client?http://0.0.0.0:9000'],
        // avatar: ['./src/renderers/avatar', 'webpack/hot/only-dev-server'],
        // nametag: ['./src/renderers/nametag', 'webpack/hot/only-dev-server'],
        // greeter: ['./src/renderers/greeter', 'webpack/hot/only-dev-server'],
        // devServerClient: 'webpack-dev-server/client?http://0.0.0.0:9000'
        //avatar: './src/renderers/avatar.js',
        //greeter: './src/renderers/greeter.js'
     ],
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js',
         publicPath: '/static/'
     },
     devServer: {
        host: 'localhost',
        port: 3000,

        historyApiFallback: true,
        // respond to 404s with index.html

        hot: true,
        // enable HMR on the server
    },
     module: {
         loaders: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ],
                exclude: /(node_modules|bower_components)/
            }
            // {
            //     test: /\.css$/,
            //     loader: 'css-loader',
            //     query: {
            //         modules: true,
            //         localIdentName: '[name]__[local]___[hash:base64:5]'
            //     },
            //     exclude: /(node_modules|bower_components)/
            // }
         ]
     },
     plugins: [
         new webpack.HotModuleReplacementPlugin(),
         new webpack.NamedModulesPlugin(),
         new webpack.NoEmitOnErrorsPlugin()
     ],
     devtool: 'eval'
 };