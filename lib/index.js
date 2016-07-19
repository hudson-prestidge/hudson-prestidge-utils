
function countIf (testFunc, arr) {
  var counter = 0
  for (var i = 0; i < arr.length; i++){
    if (testFunc(arr[i])) {
      counter++
    }
  } return counter
}
/*
 * filter
 */

function filter (func, arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i])
    }
  } return newArr
}
/*
 * map
 */

function map (func, arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = func(arr[i])
  } return newArr
}
var index =[countIf,filter,map]
module.exports = index;

