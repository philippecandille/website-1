const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const theme = path.basename(__dirname);

module.exports = {
  context: path.resolve(__dirname, 'src/'),
  entry: './js/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '.'),
    publicPath: `wp-content/themes/${theme}/`
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/js'),
      styles: path.resolve(__dirname, 'src/styles')
    },
    extensions: [".js", ".json", ".scss"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "style.css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devtool: 'eval-source-map',
  mode: 'development'
};
