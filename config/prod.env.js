'use strict'
const argv = require('optimist').argv
let e = argv.e
let a = ''
if (e && e === 'master') {
  a = '"master"'
} else {
  a = '"production"'
}
console.log(e)
console.log('ddd')
module.exports = {
  NODE_ENV: a
}
