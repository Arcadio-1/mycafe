/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require(`path`); //it is import package from nodejs
const cleanplugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    indexJs: "./assets/src/app/index.js",
    indexStyles: "./assets/src/css/index.scss",
    prodListjs: "./assets/src/app/products-list.js",
    prodListStyles: "./assets/src/css/products-list.scss",
    productjs: "./assets/src/app/product.js",
    productStyles: "./assets/src/css/product.scss",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
      // {
      //   test: /\.(html|json)$/,
      //   use: [`html-loader`],
      // },
      // {
      //   test: /\.(svg|png|jpg|gif)$/,
      //   loader: `file-loader`,
      //   use: [
      //     {
      //       options: {
      //         name: `[name].[hash].[ext]`,
      //         outputPath: `image/`,
      //         publicPath: "image/",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  watch: true,
  plugins: [
    new cleanplugin.CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: "./assets/src/template.html",
    // template: "./index.html",
    // minify: {
    //   removeComments: true,
    //   collapseWhitespace: true,
    //   removeAttributeQuotes: true,
    // },
    // chunksSortMode: "dependency",
    // }),
  ],
  devtool: "eval-cheap-module-source-map",
};
