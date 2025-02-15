const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtract = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const basePath = __dirname;
const distPath = '../dist';
const indextInput = 'src/index.html';
const indexOutput = 'index.html';
const webpackInitConfig = {
  mode: 'production',
  devtool: 'none',
  resolve: {
    extensions: ['.js']
  },
  entry: {
    app: ['core-js', './src/index.js']
  },
  output: {
    path: path.join(basePath, distPath),
    filename: '[chunkhash][name].js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCSSExtract.loader, { loader: 'css-loader' }, { loader: 'postcss-loader' }, { loader: 'sass-loader' }]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indextInput
    }),
    new MiniCSSExtract({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new OptimizeCssAssetsPlugin()
  ]
};
module.exports = webpackInitConfig;
