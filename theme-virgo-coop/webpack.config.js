const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const theme = path.basename(__dirname);

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '.'),
    publicPath: `wp-content/themes/${theme}`
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/js/components'),
      Styles: path.resolve(__dirname, 'src/styles')
    }
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
  }
};
