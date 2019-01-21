const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        //publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader', // Transpiles ES6 to ES5.
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Creates a seperate .css file.
                    'css-loader', // Creates the CSS from CSS included in JS.
                    'sass-loader' // Compiles SCSS to CSS.
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [{
                    loader: 'file-loader', // Adds all the assests to build.
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/' // Path that referred in src/index.html
                    }
                }]
            }
        ]
    },
    plugins: [
        
        /*
         * This plugin is to extract the css from JS and creates a new .css file for it.
         */
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        
        /*
         * This plugin is to create a new html document in dist folder.
         */
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        }),
        
        /*
         * This plugin is to delete old dist folder on each build process.
         */
        new CleanWebpackPlugin(['dist']),

        /*
         * Antomatically loads the 3rd party libraries(e.g jQuery) against provided variable names below.
         */
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ]
};