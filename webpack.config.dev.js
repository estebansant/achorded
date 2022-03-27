const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: "/",
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        port: 3000,
    }
}