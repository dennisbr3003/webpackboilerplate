const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/assets'),
    },   
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin()
    ],    
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),            
        },
        hot: true,
        open: true,
    },    
}