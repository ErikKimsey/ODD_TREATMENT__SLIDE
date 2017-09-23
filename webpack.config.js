var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
          {test: /\.css$/, exclude: /node_modules/, loader: "style-loader"},
          {test: /\.css$/, exclude: /node_modules/, loader: "css-loader"}
        ]
    },
    plugins: [new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })]
};
