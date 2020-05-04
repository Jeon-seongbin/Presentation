const path = require("path"); // __dirname 현재위치 이용하기 위해서 사용
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, "src", "index.js"),
        //__dirname -> 웹팩 이 설정되어있는 위치
        //에서 index.js가 웹팩 이 실행되어지는 위치
    },
    // 처음 시작점(input하는 파일)

    output: {
        filename: '[id].bundle.js',
        path: path.join(__dirname, "dist"),
        //dist라는건 관용적으로 씀
        //build
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.js$/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"],
            },
            {
                test: /\.sass$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            }
        ],

    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new CopyPlugin([{ from: "src/assets/", to: "assets/" }]),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
}