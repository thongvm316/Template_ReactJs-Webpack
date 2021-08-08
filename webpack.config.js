const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let mode = 'development'
let target = 'web'
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'style.[contenthash].css',
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
  }),
]

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
  target = 'browserslist'
}

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin())
} // ! when make common webpack, move this into webpack.dev.js

// TODO scss not live for dev when use "hot"

module.exports = {
  mode: mode,
  target: target, // ? in case, when use postcss-loader and .browserslistrc, devServer is not working, so use it to handle the problem

  entry: {
    bundle: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'images/[hash][ext][query]', // ? store img file into speculate file
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', // ? use for browserslist, add property for old versions browsers
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // ? convert ES6 to ES5
        },
      },
    ],
  },

  devtool: 'source-map', // ? no need in production, for debug --> it will show line code in file and in chrome as same

  resolve: {
    extensions: ['.js', '.jsx'], // ? can use either js and jsx in project ReactJs
  },

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true, // ? just update things change, not reload all
  },

  plugins: plugins,
}
