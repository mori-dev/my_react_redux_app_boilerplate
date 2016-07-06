path = require('path');
webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query:{
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
        test: /.css$/,
        loader: 'style!css'
      }
    ]
  },
  devServer: {
    contentBase: 'dist',
      port: 8080,
      host: "0.0.0.0",
      inline: true,
  }
}
