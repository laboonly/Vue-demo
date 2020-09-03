'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://mockapi.eolinker.com/IWVnKePdd79905ba2a21b8dce223816c8439c7913ffd668/"'
})
