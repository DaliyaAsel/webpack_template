const webpack = require('webpack')
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('../build/webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
    // BUILD settings gonna be here
    mode: 'development',
    // devtool: 'cheap-module-eval-source-map',
    devServer: {
        static: baseWebpackConfig.externals.paths.dist,
        port: 8081,
        // overlay: {
        //     warnings: true,
        //     errors: true
        // },
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({ //это карта сайта
            filename: '[file].map'
        })
    ]
});

// export buildWebpackConfig
module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})