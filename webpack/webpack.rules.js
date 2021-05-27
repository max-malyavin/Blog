const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const scss = {
//   test: /\.s[ac]ss$/,
//   use: [
//     {
//       loader: MiniCssExtractPlugin.loader,
//     },
//     "css-loader",
//     "sass-loader",
//   ],
// };

const less = {
  test: /\.less$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    "css-loader",
    {
      loader: "less-loader",
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  ],
};

const css = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    "css-loader",
  ],
};

const fonts = {
  test: /\.(woff|woff2|ttf|eot)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "fonts/",
      },
    },
  ],
};

const images = {
  test: /\.(jpe?g|jpg|png|svg|gif)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "images/",
      },
    },
  ],
};

const ts = {
  test: /\.(tsx?|jsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader",
      options: {
        // babelrc: false,
        presets: [["@babel/preset-env"], "@babel/preset-typescript"],
        plugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          ["@babel/plugin-proposal-class-properties", { loose: true }],
          "@babel/plugin-syntax-dynamic-import",
          ["@babel/plugin-proposal-private-methods", { loose: true }],
          // ["@babel/plugin-transform-typescript", { isTSX: true }],
          "@babel/plugin-proposal-optional-chaining",
          // "react-hot-loader/babel",
        ],
      },
    },
  ],
};

const js = {
  test: /\.(js?|jsx?)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: [["@babel/preset-env"], "@babel/preset-react"],
        plugins: [
          [
            "@babel/plugin-proposal-decorators",
            {
              legacy: true,
            },
          ],
          [
            "@babel/plugin-proposal-class-properties",
            {
              loose: true,
            },
          ],
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-optional-chaining",
        ],
      },
    },
  ],
};

module.exports = { images, fonts, css, less, js, ts };
