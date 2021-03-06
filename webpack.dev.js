const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const plugins = [
  new CleanWebpackPlugin(),
  new LodashModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
]

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin())
} // handle err when build-dev, cuz ReactRefreshWebpackPlugin not work when build-dev

module.exports = merge(common, {
  mode: 'development',
  target: 'web',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendor',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
  },

  plugins: plugins,
})
