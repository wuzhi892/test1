/**
 * Created by Administrator on 2017/4/9.
 */

/* 引入操作路径模块和webpack */
var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口文件
    entry: './src/main.js',
    output: {
        //输出目录，没有则新建
        path : __dirname+'/build/',
        //文件名
        filename: 'build.[hash].js'
    },
    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    },
    module: {
        loaders: [
            //用来解析vue后缀的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            //用babel来解析js文件并把es6的语法转换成浏览器认识的语法
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'App',
          template: './template.html'
        }),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    }
};