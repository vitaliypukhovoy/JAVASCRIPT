
let map1 = new Map([["name", "Nicholas"], ["age", 25]]),
    array = [...map1];
console.log(array);

let smallNumbers = [1, 2, 3],
    bigNumbers = [100, 101, 102],
    allNumbers = [0, ...smallNumbers, ...bigNumbers];
console.log(allNumbers.length);     // 7
console.log(allNumbers);            // [0, 1, 2, 3, 100, 101, 102

//  let set = new Set([1, 2, 3, 3, 3, 4, 5]),
//     array = [...set];
// console.log(array);             // [1,2,3,4,5]
