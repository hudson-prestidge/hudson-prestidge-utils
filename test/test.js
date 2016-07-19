var assert = require('./assert')
var index = require ('../lib/index.js')
var data = require('../lib/data')
var countIf = index[0]
var filter = index[1]
var map = index[2]
var meaningOfLife = '42'

function isNumber (thing) {
  var number = parseInt(thing)
  return number === thing
}

/*
 * isEmail
 */

function isEmail (str) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(str)){
    return true
  }else {return false}
}

// assert(isEmail('thedonald@makeamericagreatagain.com'), true, 'isEmail detects an email')
// assert(isEmail('3333@'), false, 'isEmail does not give a false positive')
// assert(isEmail('johnny.b.good'), false, 'isEmail does not give a false positive')


var isString = function (s) {
  return typeof s === 'string'
}
var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
var expectedNumberCount = 4 // do you know which 4 are numbers?
var expectedStringCount = 2
var numberCount = countIf(isNumber, mixedArray)
var stringCount = countIf(isString, mixedArray)

assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array')
assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')

var emails = filter(isEmail, data)
assert(emails.length, 44, 'filter and isEmail returns the correct number of emails')

var someNumbers = [2, 4, 6]
var expectedNumbers = [4, 8, 12]
var timesTwo = function (num) {
  return num * 2
}
var actualNumbers = map(timesTwo, someNumbers)
for (var i = 0; i < expectedNumbers.length; i++) {
  assert(expectedNumbers[i], actualNumbers[i], 'number mapped correctly')
}
