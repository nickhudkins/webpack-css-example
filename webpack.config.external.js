var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./entry",
    output: {
        path: __dirname + "/dist",
        filename: "external.bundle.js"
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
      ]
    },
    plugins: [
      new ExtractTextPlugin('ALLMYCSS.css')
    ]
}
