const webpack = require("webpack");
module.exports = {
  context: __dirname + "/src",
  entry: {
    pikapika: "./index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.ProvidePlugin({
      "jQuery": "jquery",
      "$": "jquery" 
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
          loader: "babel-loader",
          options:{
            presets: [
              ["es2015", {
                loose: true,
                module: true
              }]
            ]
          }
      }
    }]
  }
};


