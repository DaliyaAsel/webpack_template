const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}
const {
    VueLoaderPlugin
} = require('vue-loader')

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: PATHS.src,
    output: {
        path: PATHS.dist,
        filename: `${PATHS.assets}js/[name].js`,
        publicPath: '/'
    },
    plugins: [new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`
        }),
        new CopyWebpackPlugin({
            patterns: [{
                    from: `${PATHS.src}/img`,
                    to: `${PATHS.assets}/img`
                },
                {
                    from: `${PATHS.src}/static`,
                    to: '``'
                },
            ],
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
                test: /\.txt$/,
                use: 'raw-loader'
            }, {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    require.resolve("../src/js/postcss.config"),
                                ],
                            },
                        },
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [
                                    require.resolve("../src/js/postcss.config"),
                                ],
                            },
                        },
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }

            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    resolve : {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
};