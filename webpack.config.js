/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require(`path`); //it is import package from nodejs
const cleanplugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    mainJs: "./assets/src/main.js",
    mainStyles: "./assets/src/css/main.scss",
    indexJs: "./assets/src/app/index.js",
    indexStyles: "./assets/src/css/index.scss",
    prodListjs: "./assets/src/app/products-list.js",
    prodListStyles: "./assets/src/css/products-list.scss",
    productjs: "./assets/src/app/product.js",
    productStyles: "./assets/src/css/product.scss",
    orderJs: "./assets/src/app/order.js",
    orderStyle: "./assets/src/css/order.scss",
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                  useBuiltIns: "entry",
                  corejs: 3,
                  targets: "ie >= 8",
                  debug: true,
                },
              ],
            ],
            plugins: [["@babel/plugin-transform-runtime", { corejs: false }]],
          },
        },
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
