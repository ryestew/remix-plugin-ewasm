'use strict'

require('babel-polyfill')

var csjs = require('csjs-inject')
var yo = require('yo-yo')

document.body.appendChild(app.render())

var extension = new window.RemixExtension()
extension.listen('compiler', 'compilationFinished', function () {
console.log(arguments)
})