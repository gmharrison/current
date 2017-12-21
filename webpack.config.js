var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/current/index.html',
    filename: 'index.html',
    inject: 'body'
});
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "build.css",
});

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // target: 'node',
    entry: __dirname + '/current/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
              test: /\.scss$/,
              use: extractSass.extract({
                    use: [{
                        loader: "css-loader?url=false"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader",

                })
            },
            {
              test: /\.svg$/,
              loaders: [
                'babel-loader',
                {
                  loader: 'react-svg-loader',
                  query: {
                    jsx: true
                  }
                },
              ]
            },
        ]
    },
    output: {
        filename: 'build.js',
        path: __dirname + '/build'
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new ExtractTextPlugin("current.scss"),
        extractSass,
        // new CopyWebpackPlugin([
        //     {from:'current/static/img/',to:'images'}
        // ])
    ]
}