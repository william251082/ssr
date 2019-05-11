const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    // Inform webpack that we're building a bundle for nodejs, rather than for the browser
    target: 'node',

    // Tell webpack the root of server application
    entry: './src/index.js',

    // Tell webpack where to put the out file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
};

module.exports = merge(baseConfig, config);