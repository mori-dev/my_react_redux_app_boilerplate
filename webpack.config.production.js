const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = merge(baseConfig, {
    devtool: 'eval',
    eslint: {
        configFile: './.eslintrc.yaml',
        fix: false,
    },
});

module.exports = config;
