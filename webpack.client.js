const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    // Tell webpack the root of server application
    entry: './src/client/client.js',

    // Tell webpack where to put the out file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
};

module.exports = merge(baseConfig, config);