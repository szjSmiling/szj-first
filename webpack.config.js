
const path = require('path');//path.join(__dirname,'src');返回当前运行环境下的相对路径，D://src
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// const devModule = require('./config/dev.js');
// const proModule = require('./config/prod.js');
// let finalModule = {};
// let ENV = process.env.NODE_ENV;// 此处变量可由命令行转入
// switch (ENV) {
//   case 'dev':
//     finalModule = devModule;
//     break;
//   case 'prod':
//     finalModule = proModule;
//     break;
//   default:
//     break;
// }
// module.exports = finalModule;

module.exports = {
  // entry:{
    // app:[path.join(__dirname,'src','index.js'),'webpack-dev-server/client?http://localhost:7000/']
    // app:path.join(__dirname,'src','index.js'),
  // },
  entry:'./src/index.js',
  output:{// 打包生成文件
     filename:'bundle.js',
     path:path.join(__dirname,'build'),
     publicPath: "./"

    // publicPath”是“webpack文件的URL路径”，就像url-prefix一样;
    // “contentBase”是“提供文件非webpack文件的目录”，服务文件不是由webpack生成的;
  },
  stats: {
    // One of the two if I remember right
    entrypoints: false,
    children: false
  },
  resolve:{
    alias: {
      'src': path.resolve(__dirname, 'src'),
      // 'less': path.resolve(__dirname, 'src/less'),
      // 'components': path.resolve(__dirname, '../src/components')
     }
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true
  //       }
  //     }
  //   }
  // },

  //webpack输出真实的文件，而webpack-dev-server输出的文件只存在于内存中,不输出真实的文件;
  devServer: {//指定了服务器资源的根目录，如果不写入contentBase的值，那么contentBase默认是项目的目录,js,css不会引入。
    contentBase: path.join(__dirname, "build"),
    port:8181,//port配置属性指定了开启服务的端口号：
    // host:'0.0.0.0',//host设置的是服务器的主机号：
    historyApiFallback:{//这个配置属性是用来应对返回404页面时定向到特定页面用的;// historyApiFallback:true,//不跳转
      rewrites:[
         {from:/./,to:'/err.html'}
      ]
    },
    hot:true,//inline mode模式的刷新
    inline:true,//inline mode模式的刷新,即实时刷新
    // progress:true,// Shows compilation progress in browser console
    // allowedHosts:[],// 允许哪些主机访问服务器,
    // lazy:false,//Disables watch mode and recompiles bundle only on a request,禁用监视模式
    // compress:false,//当它被设置为true的时候对所有的服务器资源采用gzip压缩,
    //compress优点:对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能;服务端要对文件进行压缩，而客户端要进行解压，增加了两边的负载;
    // quiet:false,//当它被设置为true的时候，控制台只输出第一次编译的信息，当你保存后再次编译的时候不会输出任何内容，包括错误和警告;
    // stats: "errors-only",// stats: "errors-only"表示只打印错误：
    // overlay: true,// 这个配置属性用来在编译出错的时候，在浏览器页面上显示错误，默认是false
  },
  module:{
    rules:[
      {
        test:/\.js$/,loader:'babel-loader',
        exclude: path.resolve(__dirname,"./node_modules"),//打包除这个文件之外的文件
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
          'css-loader',
          'postcss-loader'
        ]
      }, 
      {
        test:/\.less$/,
        loader:[
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },

    ]
  },
  plugins:[
      new webpack.HotModuleReplacementPlugin(),
      // new CleanWebpackPlugin(['build']),
      new HtmlWebpackPlugin({// 会自动生成一个html文件，并且引入打包后的css，js，如果有模板，就定义根据模板来生成，否则生成的是个空的html；
        template: "./index.html",
        filename: "index.html"
      }),
      new webpack.BannerPlugin('Created by Alexander on '+new Date()+' QQ:3556573571'),
      new MiniCssExtractPlugin({
      //   // Options similar to the same options in webpackOptions.output
      //   // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
  ]
}