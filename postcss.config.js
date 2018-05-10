
//在postcss-loader中引入autoprefixer插件
//autoprefixer-loader,自动增添兼容写法
module.exports = {
  // parser: 'sugarss',
  plugins : [
    require('autoprefixer'),
    require('postcss-import')
  ]
}