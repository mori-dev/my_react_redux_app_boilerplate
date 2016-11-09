path = require('path');
webpack = require('webpack');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

const config = {
    entry: ['./src/index.js'],
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
    plugins: [
        new webpack.NoErrorsPlugin(),
        new FlowStatusWebpackPlugin({
            binaryPath: './node_modules/.bin/flow',
            failOnError: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                // 'HOGE': JSON.stringify(process.env.HOGE), // .env から取得した定数など
            },
        }),
    ],
    devServer: {
        contentBase: 'dist',
            port: 8080,
            host: "0.0.0.0",
            inline: true,
    },
}

module.exports = config;
