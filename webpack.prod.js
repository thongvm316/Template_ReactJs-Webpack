const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== 'undefined'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const WebpackBundleAnalyzer =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const plugins = [
  new CleanWebpackPlugin(),

  new LodashModuleReplacementPlugin(),
  new MiniCssExtractPlugin({
    filename: 'style.[contenthash].css',
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
]

if (isAnalyze) {
  plugins.push(new WebpackBundleAnalyzer())
}

module.exports = merge(common, {
  mode: 'production',
  target: 'browserslist',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: plugins,
})
