
const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装

module.exports = {
  entry:{
    app:path.join(__dirname,'src','index.js')
  },
  output:{
     filename:'bundle.js',
     path:path.join(__dirname,'dist')
  },
  // //webpack输出真实的文件，而webpack-dev-server输出的文件只存在于内存中,不输出真实的文件;
  devServer: {//指定了服务器资源的根目录，如果不写入contentBase的值，那么contentBase默认是项目的目录。
    contentBase: path.join(__dirname, "dist"),
    port:7000,//port配置属性指定了开启服务的端口号：
    // host:'0.0.0.0',//host设置的是服务器的主机号：
    historyApiFallback:{//这个配置属性是用来应对返回404页面时定向到特定页面用的;
      rewrites:[
         {from:/./,to:'/err.html'}
      ]
    },
    hot:true,//inline mode模式的刷新
    inline:true,//inline mode模式的刷新
    compress:false,//当它被设置为true的时候对所有的服务器资源采用gzip压缩,
    //优点:对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能;服务端要对文件进行压缩，而客户端要进行解压，增加了两边的负载;
    quiet:false,//当它被设置为true的时候，控制台只输出第一次编译的信息，当你保存后再次编译的时候不会输出任何内容，包括错误和警告;
    stats: "errors-only",// stats: "errors-only"表示只打印错误：
    overlay: true,// 这个配置属性用来在编译出错的时候，在浏览器页面上显示错误，默认是false
  },
  // module:{
  //   rules:[
  //     { test: /\.txt$/, use: 'raw-loader' }
  //   ]
  // },
  plugins:[
      new webpack.HotModuleReplacementPlugin()
  ]
}