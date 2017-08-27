"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var map1 = new Map([["name", "Nicholas"], ["age", 25]]),
    array = [].concat(_toConsumableArray(map1));
console.log(array);

var smallNumbers = [1, 2, 3],
    bigNumbers = [100, 101, 102],
    allNumbers = [0].concat(smallNumbers, bigNumbers);
console.log(allNumbers.length); // 7
console.log(allNumbers); // [0, 1, 2, 3, 100, 101, 102

//  let set = new Set([1, 2, 3, 3, 3, 4, 5]),
//     array = [...set];
// console.log(array);             // [1,2,3,4,5]