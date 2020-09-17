'use strict'
const path = require('path') //path模块是node.js中处理路径的核心模块。可以很方便的处理关于文件路径的问题。

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  devServer: {
    proxy: 'https://mockapi.eolinker.com/IWVnKePdd79905ba2a21b8dce223816c8439c7913ffd668/'
  },
  chainWebpack(config) { 
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
