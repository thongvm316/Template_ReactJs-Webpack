module.exports = {
  entry: {
    bundle: './src/index.js',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
