const baseConfig = require("./webpack.config.base")
const { merge } = require("webpack-merge")
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")


const port = 8083;
const config = merge(baseConfig, {
    devServer: {
        port
    },

    plugins: [
        new FriendlyErrorsWebpackPlugin(),

    ]
})

module.exports = config