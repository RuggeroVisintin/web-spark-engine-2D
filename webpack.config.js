const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './packages/engine/src/index.ts',
    target: "web",
    devtool: 'inline-source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        library: 'SparkEngine',
        libraryTarget: 'umd',
        filename: 'spark-engine-2d.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'packages/sandbox'), to: path.resolve(__dirname, 'dist') + '/'}
            ],
        }),
    ],
};