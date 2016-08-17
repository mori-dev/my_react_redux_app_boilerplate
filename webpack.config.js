path = require('path');
webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist/'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
          test: /\.css$/,
          loaders: ['style', 'css?modules'],
      },
    ]
  },
  eslint: {
      configFile: './.eslintrc',
      fix: true,
  },
  devServer: {
    contentBase: 'dist',
      port: 8080,
      host: "0.0.0.0",
      inline: true,
  }
}
