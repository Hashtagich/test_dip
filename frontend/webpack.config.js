const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack"); // Добавлено для работы с .env
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/snow-queen.html",
      filename: "snow-queen.html",
    }),
    new Dotenv(), // Подключение dotenv-webpack
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'output/assets')
        }
      ]
    })
  ],
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        sideEffects: true,
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  mode: "development",
};
