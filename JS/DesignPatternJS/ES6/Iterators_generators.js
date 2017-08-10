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
let iterator = createIterator();
console.log(iterator.next().value);     // 1
console.log(iterator.next().value);     // 2
console.log(iterator.next().value);     // 3


function *createIterator(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
}
let iterator = createIterator([1, 2, 3]);
console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next());           // "{ value: 2, done: false }"
console.log(iterator.next());           // "{ value: 3, done: false }"
console.log(iterator.next());           // "{ value: undefined, done: true }"
// for all further calls
console.log(iterator.next());           // "{ value: undefined, done: true }"

let createIterator = function *(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
};
let iterator = createIterator([1, 2, 3]);
console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next());           // "{ value: 2, done: false }"
console.log(iterator.next());           // "{ value: 3, done: false }"
console.log(iterator.next());           // "{ value: undefined, done: true }"
// for all further calls
console.log(iterator.next());           // "{ value: undefined, done: true }"


let o = {
    createIterator: function *(items) {
        for (let i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
};
let iterator = o.createIterator([1, 2, 3]);

let o = {
    *createIterator(items) {
        for (let i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
};
let iterator = o.createIterator([1, 2, 3])


//Iterables and for-of Loops
let values = [1, 2, 3];
for (let num of values) {
    console.log(num);
}

//Accessing the Default Iterator
let values = [1, 2, 3];
let iterator = values[Symbol.iterator]();
console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next());           // "{ value: 2, done: false }"
console.log(iterator.next());           // "{ value: 3, done: false }"
console.log(iterator.next());           // "{ value: undefined, done: true }


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
let colors = [ "red", "green", "blue" ];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
for (let entry of colors.entries()) {
    console.log(entry);
}
for (let entry of tracking.entries()) {
    console.log(entry);
}
for (let entry of data.entries()) {
    console.log(entry);
}

//The values() Iterator
let colors = [ "red", "green", "blue" ];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
for (let value of colors.values()) {
    console.log(value);
}
for (let value of tracking.values()) {
    console.log(value);
}
for (let value of data.values()) {
    console.log(value);
}


//The keys() Iterator
let colors = [ "red", "green", "blue" ];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
for (let key of colors.keys()) {
    console.log(key);
}
for (let key of tracking.keys()) {
    console.log(key);
}
for (let key of data.keys()) {
    console.log(key);
}
