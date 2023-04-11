const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        // [name] found later refers to the name of this key
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        // [contenthash] helps with caching by giving all builds different filenames
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,            // Delete the old bundle when building new one
        assetModuleFilename: '[name][ext]' // Ensures imported assets keep their name
    },
    plugins: [
        // For creating the index.html file with webpack
        new HtmlWebpackPlugin({
            title: 'Marbles & Cards',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ],
    module: {
        rules: [
            {
                // Allows us to import assets in js files
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    devtool: 'source-map',  // Create map between bundle and source code for debugging
    devServer: {
        static: {
            // This is what we're serving when the server runs
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,         // Open browser automatically when the server starts
        hot: true,          // Use hot reloading
        compress: true,     // Enable gzip compression
        historyApiFallback: true
    }
}