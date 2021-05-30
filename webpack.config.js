// css-minimizer-webpack-plugin or optimize-css-assets-webpack-plugin
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { images, fonts, css, less, ts, js } = require("./webpack/./webpack.rules.js");
const { plugins } = require("./webpack/./webpack.plugins.js");

const isDev = process.env.NODE_ENV === "development";

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (!isDev) {
    config.minimizer = [new OptimizeCssAssetsPlugin(), new TerserPlugin()];
  }
  return config;
};

module.exports = {
  context: path.join(__dirname, "src"),
  mode: isDev ? "production" : "development",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    fallback: {
      crypto: false,
      "crypto-browserify": require.resolve("crypto-browserify"),
    },
  },
  entry: ["/index.js"],
  plugins,
  optimization: optimization(),
  performance: { hints: false },
  module: {
    rules: [images, css, fonts, less, ts, js],
  },
  devServer: {
    // historyApiFallback: {
    //   rewrites: [{ from: /^\/*/, to: "/index.html" }],
    // },
    port: 4200,
    hot: true,
    open: true,
    historyApiFallback: true,
    liveReload: true,
    // host: "0.0.0.0",
  },
  devtool: isDev ? "source-map" : false,
  output: {
    filename: !isDev ? "js/[name].[fullhash].bundle.js" : "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/",
  },
};
