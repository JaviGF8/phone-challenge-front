const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [ 'babel-polyfill', './src/index.js' ],
  output: {
    filename: '[name].js',
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    modules: [ path.join(__dirname, './src'), 'node_modules' ],
    extensions: [ '.js', '.jsx', '.css', '.scss' ],
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss|sass)$/,
        include: [ path.resolve(__dirname, 'src/') ],
        exclude: [ path.resolve(__dirname, 'node_modules/') ],
        use: [
          {
            loader: 'development' === process.env.ENVIRONMENT ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        include: [ path.resolve(__dirname, 'node_modules/') ],
        exclude: [ path.resolve(__dirname, 'src/') ],
        use: [
          {
            loader: 'development' === process.env.ENVIRONMENT ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 3001,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      hash: true,
    }),
    new MiniCssExtractPlugin('styles.css'),
    new webpack.ProvidePlugin({ jQuery: 'jquery' }),
  ],
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
