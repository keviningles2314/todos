// npm i -D html-loader html-webpack-plugin // se importan 2 modulos 
//se permite mover el archivo html a dist
const FileLoader = require('file-loader');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    mode: 'development',
    output: {
        clean: true
    },

    module: {
        rules:[
              {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                },
              },
              {
                  test: /\.css$/,
                  exclude: /style.css$/,
                  use: ['style-loader','css-loader']
              },
              {
                  test: /style.css$/,
                  use: [MiniCssExtractPlugin.loader,'css-loader']
              },
              {
                  test: /\.(png|jpe?g|gif)$/,
                  loader: 'file-loader'
              }   
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title:  'Mi Webpack App',       //cambia el titulo
            template: './src/index.html', //donde esta
            filename: './index.html'        //para donde va y puede cambiar el nombre
        }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        ignoreOrder: false
    }),
    new CopyPlugin({
       patterns:[ 
           {from:'src/assets/', to: 'assets/' }
    ],
    }),
    ]


}