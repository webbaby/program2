
var htmlWebpackPlugin=require('html-webpack-plugin');
var path=require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports={
    entry: "./app/index.jsx",


    output:{
       path: __dirname + "/dist",
        filename:'js/[name].bundle.js'
        //上线地址publicPath:'http://cdn.com/'
    },
    resolve:{
        extensions:[ '.js','.jsx']
    },
    module: {
        rules:[{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:[
                {
                    loader:'babel-loader'

                }
            ]
        },
            {
                test: /\.(less|css)$/,
                use: [

                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')()],//自动加上浏览器前缀
                            broswers: ['last 5 versions']
                        }
                    },
                    {loader: 'less-loader'}
                ]
            },
            {
                test:/\.html$/,
                use:[
                    'html-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif|svg)$/i,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name]+[hash].[ext]'

                        }
                    }

                ]
            }

        ]


        //    {
        //       test:/\.css$/,
        //    loader:'style-loader!css-loader!postcss-loader'  //处理css文件
        //   }


    },


    

    plugins:[
        new htmlWebpackPlugin({
            template:'index.html',//可以设置多个参数，例如生成的文件名，脚本放在头部还是body中等
            filename:'index.html',
            inject:'body',
            title:'webpack is good a'

            //压缩minify
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("css/[name].css"),

        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
       
    ],
    devServer: {
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        },


        historyApiFallback: true, //不跳转
        inline: true//实时刷新

    }
};