const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { ModuleFederationPlugin } = require("webpack").container
const webpack = require("webpack")
const happyPack = require("happypack")
const os = require('os');
const happyThreadPool = happyPack.ThreadPool({ size: os.cpus().length });
const path = require('path') // node内置模块

module.exports = {
    // cache: {
    //     type: "filesystem",
    // },
    entry: {
        index: path.resolve("src/main.ts"),
        // 需要被提取为公共模块的群组
        // vendors: ['vue', "element-ui", "vue-router"],
    },
    output: {
        filename: '[name].[fullhash].js',
        chunkFilename: '[id].[chunkhash].js',
        path: path.resolve("dist")
    },
    resolve: {
        // require时省略的扩展名，遇到.vue结尾的也要去加载
        extensions: ['.js', '.vue', ".json", ".ts", ".tsx"],
        // 模块别名地址，方便后续直接引用别名，无须写长长的地址，注意如果后续不能识别该别名，需要先设置root
        alias: {
            "@": path.resolve("src")
        }
    },
    mode: "development",
    stats: "errors-only",
    module: {
        rules: [
            {
                test: /\.js/, //匹配js文件
                use: 'Happypack/loader?id=js',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css|scss$/, //匹配css文件
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            template: path.resolve("public/index.html")
        }),
        new webpack.ProgressPlugin({
            entries: true,
            modules: true,
            modulesCount: 100,
            profile: true

        }),
        new happyPack({
            id: 'js',
            //共享进程池
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: false,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ]
                    }
                },

            ]
        }),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            // 提供给其他服务加载的文件
            filename: "financeMain.js",
            // 唯一ID，用于标记当前服务
            name: "finance",
            remotes: {
                platform: "platform@http://localhost:8080/platformMain.js",
            },
            exposes: {
                './Finance': "./src/views/finance/index.vue",
            },
            shared: require("../package.json").dependencies

        }),
    ]

}