const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: "../dist",
    open: "chrome",
    hot: true,
    historyApiFallback: true,
    // eslint-disable-next-line no-dupe-keys
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [{ from: /favicon.ico/, to: "[path/to/favicon]" }],
    },
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = merge(common, devConfig);
