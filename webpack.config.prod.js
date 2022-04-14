/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require(`path`); //it is import package from nodejs
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, `assets`, `scripts`),
    clean: true,
  },
  devtool: "cheap-source-map",
});
