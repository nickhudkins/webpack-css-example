const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./entry",
    output: {
        path: __dirname + "/dist",
        filename: "external.bundle.js"
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") }
      ]
    },
    postcss() {
      return [
        autoprefixer({ browsers: ['> 1%'] })
      ]
    },
    plugins: [
      new ExtractTextPlugin('all.external.css')
    ]
}
