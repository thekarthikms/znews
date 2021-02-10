const path = require('path')
const {
    merge
} = require('webpack-merge')
const config = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// new MiniCssExtractPlugin()
module.exports = merge(config, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dev')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }), new MiniCssExtractPlugin({
            filename: "[name].css"
        })

    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, ]
    },

})