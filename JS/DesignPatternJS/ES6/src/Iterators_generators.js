var colors = ["red", "green", "blue"];
for (var i = 0, len = colors.length; i < len; i++) {
    console.log(colors[i]);
}

function createIterator(items) {
    var i = 0;
    return {
        next: function() {
            var done = (i >= items.length);
            var value = !done ? items[i++] : undefined;
            return {
                done: done,
                value: value
            };
        }
    };
}
var iterator = createIterator([1, 2, 3]);
console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next());           // "{ value: 2, done: false }"
console.log(iterator.next());           // "{ value: 3, done: false }"
console.log(iterator.next());           // "{ value: undefined, done: true }"
// for all further calls
console.log(iterator.next());           // "{ value: undefined, done: true }"

// generator
function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}
// generators are called like regular functions but return an iterator
let iterator2 = createIterator();
console.log(iterator2.next().value);     // 1
console.log(iterator2.next().value);     // 2
console.log(iterator2.next().value);     // 3


function *createIterator(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
}
let iterator3 = createIterator([1, 2, 3]);
console.log(iterator3.next());           // "{ value: 1, done: false }"
console.log(iterator3.next());           // "{ value: 2, done: false }"
console.log(iterator3.next());           // "{ value: 3, done: false }"
console.log(iterator3.next());           // "{ value: undefined, done: true }"
// for all further calls
console.log(iterator3.next());           // "{ value: undefined, done: true }"

let createIterator3 = function *(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
};
let iterator4 = createIterator([1, 2, 3]);
console.log(iterator4.next());           // "{ value: 1, done: false }"
console.log(iterator4.next());           // "{ value: 2, done: false }"
console.log(iterator4.next());           // "{ value: 3, done: false }"
console.log(iterator4.next());           // "{ value: undefined, done: true }"
// for all further calls
console.log(iterator.next());           // "{ value: undefined, done: true }"


let o = {
    createIterator: function *(items) {
        for (let i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
};
let iterator5 = o.createIterator([1, 2, 3]);

let a = {
    *createIterator(items) {
        for (let i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
};
let iterator6 = a.createIterator([1, 2, 3])


//Iterables and for-of Loops
let values1 = [1, 2, 3];
for (let num of values1) {
    console.log(num);
}

//Accessing the Default Iterator
let values2 = [1, 2, 3];
let iterator7 = values[Symbol.iterator]();
console.log(iterator7.next());           // "{ value: 1, done: false }"
console.log(iterator7.next());           // "{ value: 2, done: false }"
console.log(iterator7.next());           // "{ value: 3, done: false }"
console.log(iterator7.next());           // "{ value: undefined, done: true }


function isIterable(object) {
    return typeof object[Symbol.iterator] === "function";
}
console.log(isIterable([1, 2, 3]));          // true
console.log(isIterable("Hello"));            // true
console.log(isIterable(new Map()));          // true
console.log(isIterable(new Set()));          // true
console.log(isIterable(new WeakMap()));      // false
console.log(isIterable(new WeakSet()));      // false


//Creating Iterables
let collection = {
    items: [],
    *[Symbol.iterator]() {
        for (let item of this.items) {
            yield item;
        }
    }
};
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
for (let x of collection) {
    console.log(x);
}

//The entries() Iterator
let colors1 = [ "red", "green", "blue" ];
let tracking1 = new Set([1234, 5678, 9012]);
let data1 = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
for (let entry of colors1.entries()) {
    console.log(entry);
}
for (let entry of tracking1.entries()) {
    console.log(entry);
}
for (let entry of data1.entries()) {
    console.log(entry);
}

//The values() Iterator
let colors2 = [ "red", "green", "blue" ];
let tracking2 = new Set([1234, 5678, 9012]);
let data2 = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
for (let value of colors2.values()) {
    console.log(value);
}
for (let value of tracking2.values()) {
    console.log(value);
}
for (let value of data2.values()) {
    console.log(value);
}


//The keys() Iterator
let colors3 = [ "red", "green", "blue" ];
let tracking = new Set([1234, 5678, 9012]);
let data3 = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
for (let key of colors.keys()) {
    console.log(key);
}
for (let key of tracking.keys()) {
    console.log(key);
}
for (let key of data3.keys()) {
    console.log(key);
}

//Default Iterators for Collection Types
let colors4 = [ "red", "green", "blue" ];
let tracking4 = new Set([1234, 5678, 9012]);
let data4 = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "print");
// same as using colors.values()
for (let value of colors4) {
    console.log(value);
}
// same as using tracking.values()
for (let num of tracking4) {
    console.log(num);
}
// same as using data.entries()
for (let entry of data4) {
    console.log(entry);
}


//destructurInG and for-of loops
let data5 = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
// same as using data.entries()
for (let [key, value] of data5) {
    console.log(key + "=" + value);
}

//String Iterators
var message = "A ž B";
for (let c of message) {
    console.log(c);
}


//NodeList Iterators
var divs = document.getElementsByTagName("div");
for (let div of divs) {
    console.log(div.id);
}

//The Spread Operator and Nonarray Iterables
let set = new Set([1, 2, 3, 3, 3, 4, 5]),
    array = [...set];
console.log(array);             // [1,2,3,4,5]

// let map1 = new Map([["name", "Nicholas"], ["age", 25]]),
//     array = [...map1];
// console.log(array);             // [["name", "Nicholas"], ["age", 25]]


let smallNumbers = [1, 2, 3],
    bigNumbers = [100, 101, 102],
    allNumbers = [0, ...smallNumbers, ...bigNumbers];
console.log(allNumbers.length);     // 7
console.log(allNumbers);            // [0, 1, 2, 3, 100, 101, 102


//Passing Arguments to Iterators
function *createIterator() {
    let first = yield 1;
    let second = yield first + 2;       // 4 + 2
    yield second + 3;                   // 5 + 3
}
let iterator10 = createIterator();
console.log(iterator10.next());           // "{ value: 1, done: false }"
console.log(iterator10.next(4));          // "{ value: 6, done: false }"
console.log(iterator10.next(5));          // "{ value: 8, done: false }"
console.log(iterator10.next());           // "{ value: undefined, done: true }"


//Throwing Errors in Iterators
function *createIterator() {
    let first = yield 1;
    let second = yield first + 2;       // yield 4 + 2, then throw
    yield second + 3;                   // never is executed
}
let iterator11 = createIterator();
console.log(iterator11.next());                   // "{ value: 1, done: false }"
console.log(iterator11.next(4));                  // "{ value: 6, done: false }"
console.log(iterator11.throw(new Error("Boom"))); // error thrown from generator


//
function *createIterator() {
    let first = yield 1;
    let second;
    try {
        second = yield first + 2;       // yield 4 + 2, then throw
    } catch (ex) {
        second = 6;                     // on error, assign a different value
    }
    yield second + 3;
}
let iterator12 = createIterator();
console.log(iterator12.next());                   // "{ value: 1, done: false }"
console.log(iterator12.next(4));                  // "{ value: 6, done: false }"
console.log(iterator12.throw(new Error("Boom"))); // "{ value: 9, done: false }"
console.log(iterator12.next());                   // "{ value: undefined, done: true }"



//Generator Return Statements
function *createIterator() {
    yield 1;
    return;
    yield 2;
    yield 3;
}
let iterator13 = createIterator();
console.log(iterator13.next());           // "{ value: 1, done: false }"
console.log(iterator13.next());           // "{ value: undefined, done: tr

//
function *createIterator() {
    yield 1;
    return 42;
}
let iterator14 = createIterator();
console.log(iterator14.next());           // "{ value: 1, done: false }"
console.log(iterator14.next());           // "{ value: 42, done: true }"
console.log(iterator14.next());           // "{ value: undefined, done: true }"


//Delegating Generators
function *createNumberIterator() {
    yield 1;
    yield 2;
}
function *createColorIterator() {
    yield "red";
    yield "green";
}
function *createCombinedIterator() {
    yield *createNumberIterator();
    yield *createColorIterator();
    yield true;
}
var _iterator = createCombinedIterator();
console.log(_iterator.next());           // "{ value: 1, done: false }"
console.log(_iterator.next());           // "{ value: 2, done: false }"
console.log(_iterator.next());           // "{ value: "red", done: false }"
console.log(_iterator.next());           // "{ value: "green", done: false }"
console.log(_iterator.next());           // "{ value: true, done: false }"
console.log(_iterator.next());           // "{ value: undefined, done: true }"


//
function *createNumberIterator() {
    yield 1;
    yield 2;
    return 3;
}
function *createRepeatingIterator(count) {
    for (let i=0; i < count; i++) {
        yield "repeat";
    }
}
function *createCombinedIterator() {
    let result = yield *createNumberIterator();
    yield *createRepeatingIterator(result);
}
var iterator_ = createCombinedIterator();
console.log(iterator_.next());           // "{ value: 1, done: false }"
console.log(iterator_.next());           // "{ value: 2, done: false }"
console.log(iterator_.next());           // "{ value: "repeat", done: false }"
console.log(iterator_.next());           // "{ value: "repeat", done: false }"
console.log(iterator_.next());           // "{ value: "repeat", done: false }"
console.log(iterator_.next());           // "{ value: undefined, done: true }"

//
function *createNumberIterator() {
yield 1;
yield 2;
return 3;
}
function *createRepeatingIterator(count) {
    for (let i=0; i < count; i++) {
        yield "repeat";
    }
}
function *createCombinedIterator() {
    let result = yield *createNumberIterator();
    yield *createRepeatingIterator(result);
}
var iterator_1 = createCombinedIterator();
console.log(iterator_1.next());           // "{ value: 1, done: false }"
console.log(iterator_1.next());           // "{ value: 2, done: false }"
console.log(iterator_1.next());           // "{ value: "repeat", done: false }"
console.log(iterator_1.next());           // "{ value: "repeat", done: false }"
console.log(iterator_1.next());           // "{ value: "repeat", done: false }"
console.log(iterator_1.next());           // "{ value: undefined, done: true }"

//
function *createNumberIterator() {
    yield 1;
    yield 2;
    return 3;
}
function *createRepeatingIterator(count) {
    for (let i=0; i < count; i++) {
        yield "repeat";
    }
}
function *createCombinedIterator() {
    let result = yield *createNumberIterator();
    yield result;
    yield *createRepeatingIterator(result);
}
var iterator_2 = createCombinedIterator();
console.log(iterator_2 .next());           // "{ value: 1, done: false }"
console.log(iterator_2 .next());           // "{ value: 2, done: false }"
console.log(iterator_2 .next());           // "{ value: 3, done: false }"
console.log(iterator_2 .next());           // "{ value: "repeat", done: false }"
console.log(iterator_2 .next());           // "{ value: "repeat", done: false }"
console.log(iterator_2 .next());           // "{ value: "repeat", done: false }"
console.log(iterator_2 .next());           // "{ value: undefined, done: true }"


//Asynchronous Task Running
let fs = require("fs");
fs.readFile("config.json", function(err, contents) {
    if (err) {
        throw err;
    }
    doSomethingWith(contents);
    console.log("Done");
});


//A Simple Task Runner
function run(taskDef) {
    // create the iterator, make available elsewhere
    let task = taskDef();
    // start the task
    let result = task.next();
    // recursive function to keep calling next()
    function step() {
        // if there's more to do
        if (!result.done) {
            result = task.next();
            step();
        }
    }
    // start the process
    step();
}

run(function*() {
    console.log(1);
    yield;
    console.log(2);
    yield;
    console.log(3);
});


//Task Running with Data
function run(taskDef) {
    // create the iterator, make available elsewhere
    let task = taskDef();
    // start the task
    let result = task.next();
    // recursive function to keep calling next()
    function step() {
        // if there's more to do
        if (!result.done) {
            result = task.next(result.value);
            step();
        }
    }
    // start the process
    step();
}

run(function*() {
    let value = yield 1;
    console.log(value);         // 1
    value = yield value + 3;
    console.log(value);         // 4
});


//An Asynchronous Task Runner
function fetchData() {
    return function(callback) {
        callback(null, "Hi!");
    };
}

function fetchData() {
    return function(callback) {
        setTimeout(function() {
            callback(null, "Hi!");
        }, 50);
    };
}

//
function run(taskDef) {
    // create the iterator, make available elsewhere
    let task = taskDef();
    // start the task
    let result = task.next();
    // recursive function to keep calling next()
    function step() {
        // if there's more to do
        if (!result.done) {
            if (typeof result.value === "function") {
                result.value(function(err, data) {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }
                    result = task.next(data);
                    step();
                });
            } else {
                result = task.next(result.value);
                step();
            }
        }
    }
    // start the process
    step();
}

//let fs = require("fs");
function readFile(filename) {
    return function(callback) {
        fs.readFile(filename, callback);
    };
}

//
run(function*() {
    let contents = yield readFile("config.json");
    doSomethingWith(contents);
    console.log("Done");
});