
;(function (global) {
    'use strict;'
   
    function Calculator () {
    }
    Calculator.prototype.constructor = Calculator
   
    Calculator.prototype.parseCalcText = function (calcText) {
      var reg = /(\d+)([\+\-\*\/])(\d+)/g
      var parse = reg.exec(calcText)
      console.log(parse)
   
      return parse
    }
   
    Calculator.prototype.sum = function (a, b) {
      return Number(a) + Number(b)
    }
   
    // Exports
    if ('process' in global) {
      module['exports'] = Calculator
    }
    global['Calculator'] = Calculator
   
  })((this || 0).self || global)