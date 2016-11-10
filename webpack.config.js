const autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./entry",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
      ]
    },
    postcss() {
      return [
        autoprefixer({ browsers: ['> 1%'] })
      ]
    }
}
