const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
  }
}