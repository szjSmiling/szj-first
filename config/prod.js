
const webpackMerge = require('webpack-merge');
const base = require('./base.js');

module.exports = webpackMerge(base,{
  // specific config
  // entry可以共用，prod的output需要加上文件chunkhash用来刷新缓存,并将文件输出至dist目录 
  output: {
    filename: 'bundle.[chunkhash].js',
    path: process.cwd() + '/build',
    publicPath: "../"
  },
});