const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js',
        clean: true,
    },   
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),            
        },
        devMiddleware: {
            publicPath: '/assets/'  // this is very, very important if you want this to run
        },        
        hot: true,
        open: true,
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
                test: /\.css$/, // regular expression to check for css files
                use: ['style-loader', 'css-loader'] // order does matter
            }
        ]
    },           
}