
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // common config
  entry:process.cwd() + '../src/index.js',
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude: path.resolve(__dirname,"../node_modules"),//打包除这个文件之外的文件
      },
      {
        test:/\.(png|jpeg|jpg|gif)$/,
        loader:'url-loader',//小于limit字节的文件会被转为base64位DataURl，大于limit的还会使用file-loader进行copy;等加写法===>use: 'url-loader?limit=1024  
        options:{
          limit:8192,// 单位字节
          // name:'[path][name].[ext]',
          // name:path.join(__dirname,'[name].[ext]'),
          name:'[hash:8].[name].[ext]',
          outputPath:'img/' // 表示输出文件路径前缀
        }
      },
      {
        test:/\.css$/,
        loader:[
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {loader:'css-loader',options:{sourceMap:true}},
          {loader:'postcss-loader',options:{sourceMap:true}}
        ]
      }, 
      {
        test:/\.less$/,
        loader:[
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {loader:'css-loader',options:{sourceMap:true}},
          {loader:'postcss-loader',options:{sourceMap:true}},
          {loader:'less-loader',options:{sourceMap:true}}
        ]
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../index.html',
      filename: 'index.html',
    })
  ],
};