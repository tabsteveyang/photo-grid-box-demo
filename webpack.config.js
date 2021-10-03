const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    const isProduction = env === "production";

    return {
        entry: path.join(__dirname, "src", "js", "app.js"),
        output: {
            path: path.join(__dirname, "public"),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },{
                test: /\.s?css$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@js': path.resolve(__dirname, 'src/js/'),
                '@scss': path.resolve(__dirname, 'src/scss/'),
                '@component': path.resolve(__dirname, 'src/js/component/')
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new webpack.ProvidePlugin({
                React: 'react',
                ReactDom: 'react-dom',
                PropTypes: 'prop-types'
            }),
            new HtmlWebpackPlugin({
                inject: 'body',
                minify: false,
                template: '/src/template/index.html',
                filename: 'index.html'
            })
        ],
        devtool: isProduction ? false : 'source-map'
    };
};
