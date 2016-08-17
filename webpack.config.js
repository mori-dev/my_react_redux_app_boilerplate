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
        query:{
          presets: ["react", "es2015", "stage-0"],
          passPerPreset: true,
          plugins: [
            "syntax-flow",
            "tcomb",
            "transform-flow-strip-types"
          ]
        }
      },
      {
        test: /.css$/,
        loader: 'style!css'
      }
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
