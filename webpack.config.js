"use strict"
const webpack           = require('webpack')
const path              = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    index:'./src/views/home/index'
  },
  output: {
    path: path.resolve(__dirname,'./dist/'),
    filename:'js/[name].js',
    // publicPath: '/dist/',
    chunkFilename: 'js/[id].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include:path.resolve(__dirname,'./src'),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader',
            options: {
              localIdentName: '_[hash:base64:6]'
            }
          }, {
            loader: 'sass-loader'
          }],
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env','es2015'],
            cacheDirectory: true
          }
        }]
      },
      {
        test:/\.vue$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src'),
        use:[{
          loader:'vue-loader',
          options: {
            cssModules: {
              // localIdentName: '[path][name]-[local]-[hash:base64:5]',
              localIdentName: '[name]_[hash:base64:5]',
              camelCase: true
            },
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            }
          }
        }]
      }
    ]
  },
  resolve: {
    extensions:['.js','.vue','.scss','.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:path.resolve(__dirname,'./dist/index.html'),
      template:path.resolve(__dirname,'./src/views/home/index.html'),
      inject:'body'
    })
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase:path.join(__dirname,'dist/'),
    port: 4000,
    inline: true,
    hot: false,
    // open:true,
    // noInfo:true,
    // compress: true,
  }
}