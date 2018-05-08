
const path = require('path');//path.join(__dirname,'src');返回当前运行环境下的相对路径，D://src
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
  entry:{
    // app:[path.join(__dirname,'src','index.js'),'webpack-dev-server/client?http://localhost:7000/']
    app:path.join(__dirname,'src','index.js'),
  },
  output:{// 打包生成文件
     filename:'bundle.js',
     path:path.join(__dirname,'build'),
    //  publicPath: "/build/"

    // publicPath”是“webpack文件的URL路径”，就像url-prefix一样;
    // “contentBase”是“提供文件非webpack文件的目录”，服务文件不是由webpack生成的;
  },
  // //webpack输出真实的文件，而webpack-dev-server输出的文件只存在于内存中,不输出真实的文件;
  // devServer: {//指定了服务器资源的根目录，如果不写入contentBase的值，那么contentBase默认是项目的目录。
  //   contentBase: path.join(__dirname, "dist"),
  //   port:8181,//port配置属性指定了开启服务的端口号：
  //   // host:'0.0.0.0',//host设置的是服务器的主机号：
  //   historyApiFallback:{//这个配置属性是用来应对返回404页面时定向到特定页面用的;// historyApiFallback:true,//不跳转
  //     rewrites:[
  //        {from:/./,to:'/err.html'}
  //     ]
  //   },
  //   hot:true,//inline mode模式的刷新
  //   inline:true,//inline mode模式的刷新,即实时刷新
  //   progress:true,// Shows compilation progress in browser console
  //   // allowedHosts:[],// 允许哪些主机访问服务器,
  //   // lazy:false,//Disables watch mode and recompiles bundle only on a request,禁用监视模式
  //   // compress:false,//当它被设置为true的时候对所有的服务器资源采用gzip压缩,
  //   //compress优点:对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能;服务端要对文件进行压缩，而客户端要进行解压，增加了两边的负载;
  //   // quiet:false,//当它被设置为true的时候，控制台只输出第一次编译的信息，当你保存后再次编译的时候不会输出任何内容，包括错误和警告;
  //   // stats: "errors-only",// stats: "errors-only"表示只打印错误：
  //   // overlay: true,// 这个配置属性用来在编译出错的时候，在浏览器页面上显示错误，默认是false
  // },
  module:{
    rules:[
      // { test: /\.txt$/, use: 'raw-loader' },
      {
        test:/\.(png|jpe?g|gif)$/,
        loader:'url-loader',//小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy;等加写法===>use: 'url-loader?limit=1024  
        options:{
          limit:819200,// 单位字节
          // name:'[path][name].[ext]',
          // name:path.join(__dirname,'[name].[ext]'),// 配置path.join，打包后图片路径才正确。
          name:'[name].[ext]',
          outputPath:'img/' // 表示输出文件路径前缀
        }
      },
      {
        test:/\.css$/,
        loader:['style-loader','css-loader','autoprefixer-loader']
      }, //autoprefixer-loader,自动增添兼容写法
      {
        test:/\.less$/,
        loader:['style-loader','css-loader','autoprefixer-loader','less-loader']
      },

    ]
  },
  plugins:[
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.BannerPlugin('Created by Alexander on '+new Date()+' QQ:3556573571')
  ]
}