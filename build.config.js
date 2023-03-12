const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/assets'),
        clean: true,  // only use this if you use html-webpack-plugin or the html is in a diff. folder from the js or the html will be deleted
    },   
    module: {
        rules: [
            {
                test: /\.js$/,  // ends in .js the . is preceded by an escape character
                exclude: /node_modules/, // leave this alone do not run this through a loader
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env'] // see also babelrc file: {"presets": ["@babel/preset-env"]}
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // order does matter
            }
        ]
    },        
}
