const baseConfig = require("./webpack.config.base")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { merge } = require("webpack-merge")

const config = merge(baseConfig, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin()

    ]
})

module.exports = config