const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    // bundling mode
    mode: 'development',

    // entry files
    entry: './src/root/index.ts',


    // output bundles (location)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
    },


    // loaders
    module: {
        rules: [{
            test: /\.tsx?/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist']
        }),
        new HtmlWebpackPlugin({
            template: 'mainView/index.html'
        }),
    ],
};