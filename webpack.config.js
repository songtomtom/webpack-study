const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: "./index.js",
    about: "./about.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "./about.html",
    }),
  ],
};
