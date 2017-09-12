var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/pockettees/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    // target: 'node',
    entry: __dirname + '/pockettees/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'build.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
}