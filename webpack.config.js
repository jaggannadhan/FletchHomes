const path = require('path');
const HTMLWebpackPugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: 'http://localhost:8080/'
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                loader: "babel-loader", // Translates ECMA to older versions
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$|scss/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$|jpg|jpeg|png/,
                use: 'file-loader'
              }
        ]
    }
}