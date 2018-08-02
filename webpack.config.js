
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import LiveReloadPlugin from 'webpack-livereload-plugin'

module.exports = {
  entry: [
    `@babel/polyfill`,
    `./client/index.js`,
  ],
  output: {
    path: `${__dirname}/public`,
    publicPath: `/`,
    filename: `bundle.js`,
  },
  devServer: {
    contentBase: `./public`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: `babel-loader`,
      },
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`],
      },
    ],
  },
  resolve: {
    extensions: [`*`, `.js`, `.jsx`],
  },
  mode: `development`,
};
