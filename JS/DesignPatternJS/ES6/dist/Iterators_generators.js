"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked = [createIterator, createIterator, createIterator, createIterator, createIterator, createIterator, createIterator, createNumberIterator, createColorIterator, createCombinedIterator, createNumberIterator, createRepeatingIterator, createCombinedIterator, createNumberIterator, createRepeatingIterator, createCombinedIterator, createNumberIterator, createRepeatingIterator, createCombinedIterator].map(regeneratorRuntime.mark);

var colors = ["red", "green", "blue"];
for (var i = 0, len = colors.length; i < len; i++) {
    console.log(colors[i]);
}

function createIterator(items) {
    var i = 0;
    return {
        next: function next() {
            var done = i >= items.length;
            var value = !done ? items[i++] : undefined;
            return {
                done: done,
                value: value
            };
        }
    };
}
var iterator = createIterator([1, 2, 3]);
console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: 3, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"
// for all further calls
console.log(iterator.next()); // "{ value: undefined, done: true }"

// generator
function createIterator() {
    return regeneratorRuntime.wrap(function createIterator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 1;

                case 2:
                    _context.next = 4;
                    return 2;

                case 4:
                    _context.next = 6;
                    return 3;

                case 6:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}
// generators are called like regular functions but return an iterator
var iterator2 = createIterator();
console.log(iterator2.next().value); // 1
console.log(iterator2.next().value); // 2
console.log(iterator2.next().value); // 3


function createIterator(items) {
    var _i;

    return regeneratorRuntime.wrap(function createIterator$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _i = 0;

                case 1:
                    if (!(_i < items.length)) {
                        _context2.next = 7;
                        break;
                    }

                    _context2.next = 4;
                    return items[_i];

                case 4:
                    _i++;
                    _context2.next = 1;
                    break;

                case 7:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}
var iterator3 = createIterator([1, 2, 3]);
console.log(iterator3.next()); // "{ value: 1, done: false }"
console.log(iterator3.next()); // "{ value: 2, done: false }"
console.log(iterator3.next()); // "{ value: 3, done: false }"
console.log(iterator3.next()); // "{ value: undefined, done: true }"
// for all further calls
console.log(iterator3.next()); // "{ value: undefined, done: true }"

var createIterator3 = regeneratorRuntime.mark(function createIterator3(items) {
    var _i2;

    return regeneratorRuntime.wrap(function createIterator3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _i2 = 0;

                case 1:
                    if (!(_i2 < items.length)) {
                        _context3.next = 7;
                        break;
                    }

                    _context3.next = 4;
                    return items[_i2];

                case 4:
                    _i2++;
                    _context3.next = 1;
                    break;

                case 7:
                case "end":
                    return _context3.stop();
            }
        }
    }, createIterator3, this);
});
var iterator4 = createIterator([1, 2, 3]);
console.log(iterator4.next()); // "{ value: 1, done: false }"
console.log(iterator4.next()); // "{ value: 2, done: false }"
console.log(iterator4.next()); // "{ value: 3, done: false }"
console.log(iterator4.next()); // "{ value: undefined, done: true }"
// for all further calls
console.log(iterator.next()); // "{ value: undefined, done: true }"


var o = {
    createIterator: regeneratorRuntime.mark(function createIterator(items) {
        var _i3;

        return regeneratorRuntime.wrap(function createIterator$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _i3 = 0;

                    case 1:
                        if (!(_i3 < items.length)) {
                            _context4.next = 7;
                            break;
                        }

                        _context4.next = 4;
                        return items[_i3];

                    case 4:
                        _i3++;
                        _context4.next = 1;
                        break;

                    case 7:
                    case "end":
                        return _context4.stop();
                }
            }
        }, createIterator, this);
    })
};
var iterator5 = o.createIterator([1, 2, 3]);

var a = {
    createIterator: regeneratorRuntime.mark(function createIterator(items) {
        var _i4;

        return regeneratorRuntime.wrap(function createIterator$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _i4 = 0;

                    case 1:
                        if (!(_i4 < items.length)) {
                            _context5.next = 7;
                            break;
                        }

                        _context5.next = 4;
                        return items[_i4];

                    case 4:
                        _i4++;
                        _context5.next = 1;
                        break;

                    case 7:
                    case "end":
                        return _context5.stop();
                }
            }
        }, createIterator, this);
    })
};
var iterator6 = a.createIterator([1, 2, 3]);

//Iterables and for-of Loops
var values1 = [1, 2, 3];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator2 = values1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator2.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        console.log(num);
    }

    //Accessing the Default Iterator
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var values2 = [1, 2, 3];
var iterator7 = values[Symbol.iterator]();
console.log(iterator7.next()); // "{ value: 1, done: false }"
console.log(iterator7.next()); // "{ value: 2, done: false }"
console.log(iterator7.next()); // "{ value: 3, done: false }"
console.log(iterator7.next()); // "{ value: undefined, done: true }


function isIterable(object) {
    return typeof object[Symbol.iterator] === "function";
}
console.log(isIterable([1, 2, 3])); // true
console.log(isIterable("Hello")); // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true
console.log(isIterable(new WeakMap())); // false
console.log(isIterable(new WeakSet())); // false


//Creating Iterables
var collection = _defineProperty({
    items: []
}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
    var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator3, _step2, item;

    return regeneratorRuntime.wrap(function _callee$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context6.prev = 3;
                    _iterator3 = this.items[Symbol.iterator]();

                case 5:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator3.next()).done) {
                        _context6.next = 12;
                        break;
                    }

                    item = _step2.value;
                    _context6.next = 9;
                    return item;

                case 9:
                    _iteratorNormalCompletion2 = true;
                    _context6.next = 5;
                    break;

                case 12:
                    _context6.next = 18;
                    break;

                case 14:
                    _context6.prev = 14;
                    _context6.t0 = _context6["catch"](3);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context6.t0;

                case 18:
                    _context6.prev = 18;
                    _context6.prev = 19;

                    if (!_iteratorNormalCompletion2 && _iterator3.return) {
                        _iterator3.return();
                    }

                case 21:
                    _context6.prev = 21;

                    if (!_didIteratorError2) {
                        _context6.next = 24;
                        break;
                    }

                    throw _iteratorError2;

                case 24:
                    return _context6.finish(21);

                case 25:
                    return _context6.finish(18);

                case 26:
                case "end":
                    return _context6.stop();
            }
        }
    }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
}));
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator4 = collection[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator4.next()).done); _iteratorNormalCompletion3 = true) {
        var x = _step3.value;

        console.log(x);
    }

    //The entries() Iterator
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var colors1 = ["red", "green", "blue"];
var tracking1 = new Set([1234, 5678, 9012]);
var data1 = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator5 = colors1.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator5.next()).done); _iteratorNormalCompletion4 = true) {
        var entry = _step4.value;

        console.log(entry);
    }
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator5.return) {
            _iterator5.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
    for (var _iterator6 = tracking1.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator6.next()).done); _iteratorNormalCompletion5 = true) {
        var _entry = _step5.value;

        console.log(_entry);
    }
} catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion5 && _iterator6.return) {
            _iterator6.return();
        }
    } finally {
        if (_didIteratorError5) {
            throw _iteratorError5;
        }
    }
}

var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
    for (var _iterator7 = data1.entries()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator7.next()).done); _iteratorNormalCompletion6 = true) {
        var _entry2 = _step6.value;

        console.log(_entry2);
    }

    //The values() Iterator
} catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion6 && _iterator7.return) {
            _iterator7.return();
        }
    } finally {
        if (_didIteratorError6) {
            throw _iteratorError6;
        }
    }
}

var colors2 = ["red", "green", "blue"];
var tracking2 = new Set([1234, 5678, 9012]);
var data2 = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
var _iteratorNormalCompletion7 = true;
var _didIteratorError7 = false;
var _iteratorError7 = undefined;

try {
    for (var _iterator8 = colors2.values()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator8.next()).done); _iteratorNormalCompletion7 = true) {
        var value = _step7.value;

        console.log(value);
    }
} catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion7 && _iterator8.return) {
            _iterator8.return();
        }
    } finally {
        if (_didIteratorError7) {
            throw _iteratorError7;
        }
    }
}

var _iteratorNormalCompletion8 = true;
var _didIteratorError8 = false;
var _iteratorError8 = undefined;

try {
    for (var _iterator9 = tracking2.values()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator9.next()).done); _iteratorNormalCompletion8 = true) {
        var _value = _step8.value;

        console.log(_value);
    }
} catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion8 && _iterator9.return) {
            _iterator9.return();
        }
    } finally {
        if (_didIteratorError8) {
            throw _iteratorError8;
        }
    }
}

var _iteratorNormalCompletion9 = true;
var _didIteratorError9 = false;
var _iteratorError9 = undefined;

try {
    for (var _iterator10 = data2.values()[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator10.next()).done); _iteratorNormalCompletion9 = true) {
        var _value2 = _step9.value;

        console.log(_value2);
    }

    //The keys() Iterator
} catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion9 && _iterator10.return) {
            _iterator10.return();
        }
    } finally {
        if (_didIteratorError9) {
            throw _iteratorError9;
        }
    }
}

var colors3 = ["red", "green", "blue"];
var tracking = new Set([1234, 5678, 9012]);
var data3 = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
var _iteratorNormalCompletion10 = true;
var _didIteratorError10 = false;
var _iteratorError10 = undefined;

try {
    for (var _iterator11 = colors.keys()[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator11.next()).done); _iteratorNormalCompletion10 = true) {
        var key = _step10.value;

        console.log(key);
    }
} catch (err) {
    _didIteratorError10 = true;
    _iteratorError10 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion10 && _iterator11.return) {
            _iterator11.return();
        }
    } finally {
        if (_didIteratorError10) {
            throw _iteratorError10;
        }
    }
}

var _iteratorNormalCompletion11 = true;
var _didIteratorError11 = false;
var _iteratorError11 = undefined;

try {
    for (var _iterator12 = tracking.keys()[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator12.next()).done); _iteratorNormalCompletion11 = true) {
        var _key = _step11.value;

        console.log(_key);
    }
} catch (err) {
    _didIteratorError11 = true;
    _iteratorError11 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion11 && _iterator12.return) {
            _iterator12.return();
        }
    } finally {
        if (_didIteratorError11) {
            throw _iteratorError11;
        }
    }
}

var _iteratorNormalCompletion12 = true;
var _didIteratorError12 = false;
var _iteratorError12 = undefined;

try {
    for (var _iterator13 = data3.keys()[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator13.next()).done); _iteratorNormalCompletion12 = true) {
        var _key2 = _step12.value;

        console.log(_key2);
    }

    //Default Iterators for Collection Types
} catch (err) {
    _didIteratorError12 = true;
    _iteratorError12 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion12 && _iterator13.return) {
            _iterator13.return();
        }
    } finally {
        if (_didIteratorError12) {
            throw _iteratorError12;
        }
    }
}

var colors4 = ["red", "green", "blue"];
var tracking4 = new Set([1234, 5678, 9012]);
var data4 = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "print");
// same as using colors.values()
var _iteratorNormalCompletion13 = true;
var _didIteratorError13 = false;
var _iteratorError13 = undefined;

try {
    for (var _iterator14 = colors4[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator14.next()).done); _iteratorNormalCompletion13 = true) {
        var _value3 = _step13.value;

        console.log(_value3);
    }
    // same as using tracking.values()
} catch (err) {
    _didIteratorError13 = true;
    _iteratorError13 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion13 && _iterator14.return) {
            _iterator14.return();
        }
    } finally {
        if (_didIteratorError13) {
            throw _iteratorError13;
        }
    }
}

var _iteratorNormalCompletion14 = true;
var _didIteratorError14 = false;
var _iteratorError14 = undefined;

try {
    for (var _iterator15 = tracking4[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator15.next()).done); _iteratorNormalCompletion14 = true) {
        var _num = _step14.value;

        console.log(_num);
    }
    // same as using data.entries()
} catch (err) {
    _didIteratorError14 = true;
    _iteratorError14 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion14 && _iterator15.return) {
            _iterator15.return();
        }
    } finally {
        if (_didIteratorError14) {
            throw _iteratorError14;
        }
    }
}

var _iteratorNormalCompletion15 = true;
var _didIteratorError15 = false;
var _iteratorError15 = undefined;

try {
    for (var _iterator16 = data4[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator16.next()).done); _iteratorNormalCompletion15 = true) {
        var _entry3 = _step15.value;

        console.log(_entry3);
    }

    //destructurInG and for-of loops
} catch (err) {
    _didIteratorError15 = true;
    _iteratorError15 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion15 && _iterator16.return) {
            _iterator16.return();
        }
    } finally {
        if (_didIteratorError15) {
            throw _iteratorError15;
        }
    }
}

var data5 = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
// same as using data.entries()
var _iteratorNormalCompletion16 = true;
var _didIteratorError16 = false;
var _iteratorError16 = undefined;

try {
    for (var _iterator17 = data5[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator17.next()).done); _iteratorNormalCompletion16 = true) {
        var _step16$value = _slicedToArray(_step16.value, 2),
            _key3 = _step16$value[0],
            _value4 = _step16$value[1];

        console.log(_key3 + "=" + _value4);
    }

    //String Iterators
} catch (err) {
    _didIteratorError16 = true;
    _iteratorError16 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion16 && _iterator17.return) {
            _iterator17.return();
        }
    } finally {
        if (_didIteratorError16) {
            throw _iteratorError16;
        }
    }
}

var message = "A ž B";
var _iteratorNormalCompletion17 = true;
var _didIteratorError17 = false;
var _iteratorError17 = undefined;

try {
    for (var _iterator18 = message[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator18.next()).done); _iteratorNormalCompletion17 = true) {
        var c = _step17.value;

        console.log(c);
    }

    //NodeList Iterators
} catch (err) {
    _didIteratorError17 = true;
    _iteratorError17 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion17 && _iterator18.return) {
            _iterator18.return();
        }
    } finally {
        if (_didIteratorError17) {
            throw _iteratorError17;
        }
    }
}

var divs = document.getElementsByTagName("div");
var _iteratorNormalCompletion18 = true;
var _didIteratorError18 = false;
var _iteratorError18 = undefined;

try {
    for (var _iterator19 = divs[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator19.next()).done); _iteratorNormalCompletion18 = true) {
        var div = _step18.value;

        console.log(div.id);
    }

    //The Spread Operator and Nonarray Iterables
} catch (err) {
    _didIteratorError18 = true;
    _iteratorError18 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion18 && _iterator19.return) {
            _iterator19.return();
        }
    } finally {
        if (_didIteratorError18) {
            throw _iteratorError18;
        }
    }
}

var set = new Set([1, 2, 3, 3, 3, 4, 5]),
    array = [].concat(_toConsumableArray(set));
console.log(array); // [1,2,3,4,5]

// let map1 = new Map([["name", "Nicholas"], ["age", 25]]),
//     array = [...map1];
// console.log(array);             // [["name", "Nicholas"], ["age", 25]]


var smallNumbers = [1, 2, 3],
    bigNumbers = [100, 101, 102],
    allNumbers = [0].concat(smallNumbers, bigNumbers);
console.log(allNumbers.length); // 7
console.log(allNumbers); // [0, 1, 2, 3, 100, 101, 102


//Passing Arguments to Iterators
function createIterator() {
    var first, second;
    return regeneratorRuntime.wrap(function createIterator$(_context7) {
        while (1) {
            switch (_context7.prev = _context7.next) {
                case 0:
                    _context7.next = 2;
                    return 1;

                case 2:
                    first = _context7.sent;
                    _context7.next = 5;
                    return first + 2;

                case 5:
                    second = _context7.sent;
                    _context7.next = 8;
                    return second + 3;

                case 8:
                case "end":
                    return _context7.stop();
            }
        }
    }, _marked[2], this);
}
var iterator10 = createIterator();
console.log(iterator10.next()); // "{ value: 1, done: false }"
console.log(iterator10.next(4)); // "{ value: 6, done: false }"
console.log(iterator10.next(5)); // "{ value: 8, done: false }"
console.log(iterator10.next()); // "{ value: undefined, done: true }"


//Throwing Errors in Iterators
function createIterator() {
    var first, second;
    return regeneratorRuntime.wrap(function createIterator$(_context8) {
        while (1) {
            switch (_context8.prev = _context8.next) {
                case 0:
                    _context8.next = 2;
                    return 1;

                case 2:
                    first = _context8.sent;
                    _context8.next = 5;
                    return first + 2;

                case 5:
                    second = _context8.sent;
                    _context8.next = 8;
                    return second + 3;

                case 8:
                case "end":
                    return _context8.stop();
            }
        }
    }, _marked[3], this);
}
var iterator11 = createIterator();
console.log(iterator11.next()); // "{ value: 1, done: false }"
console.log(iterator11.next(4)); // "{ value: 6, done: false }"
console.log(iterator11.throw(new Error("Boom"))); // error thrown from generator


//
function createIterator() {
    var first, second;
    return regeneratorRuntime.wrap(function createIterator$(_context9) {
        while (1) {
            switch (_context9.prev = _context9.next) {
                case 0:
                    _context9.next = 2;
                    return 1;

                case 2:
                    first = _context9.sent;
                    second = void 0;
                    _context9.prev = 4;
                    _context9.next = 7;
                    return first + 2;

                case 7:
                    second = _context9.sent;
                    _context9.next = 13;
                    break;

                case 10:
                    _context9.prev = 10;
                    _context9.t0 = _context9["catch"](4);

                    second = 6; // on error, assign a different value

                case 13:
                    _context9.next = 15;
                    return second + 3;

                case 15:
                case "end":
                    return _context9.stop();
            }
        }
    }, _marked[4], this, [[4, 10]]);
}
var iterator12 = createIterator();
console.log(iterator12.next()); // "{ value: 1, done: false }"
console.log(iterator12.next(4)); // "{ value: 6, done: false }"
console.log(iterator12.throw(new Error("Boom"))); // "{ value: 9, done: false }"
console.log(iterator12.next()); // "{ value: undefined, done: true }"


//Generator Return Statements
function createIterator() {
    return regeneratorRuntime.wrap(function createIterator$(_context10) {
        while (1) {
            switch (_context10.prev = _context10.next) {
                case 0:
                    _context10.next = 2;
                    return 1;

                case 2:
                    return _context10.abrupt("return");

                case 5:
                    _context10.next = 7;
                    return 3;

                case 7:
                case "end":
                    return _context10.stop();
            }
        }
    }, _marked[5], this);
}
var iterator13 = createIterator();
console.log(iterator13.next()); // "{ value: 1, done: false }"
console.log(iterator13.next()); // "{ value: undefined, done: tr

//
function createIterator() {
    return regeneratorRuntime.wrap(function createIterator$(_context11) {
        while (1) {
            switch (_context11.prev = _context11.next) {
                case 0:
                    _context11.next = 2;
                    return 1;

                case 2:
                    return _context11.abrupt("return", 42);

                case 3:
                case "end":
                    return _context11.stop();
            }
        }
    }, _marked[6], this);
}
var iterator14 = createIterator();
console.log(iterator14.next()); // "{ value: 1, done: false }"
console.log(iterator14.next()); // "{ value: 42, done: true }"
console.log(iterator14.next()); // "{ value: undefined, done: true }"


//Delegating Generators
function createNumberIterator() {
    return regeneratorRuntime.wrap(function createNumberIterator$(_context12) {
        while (1) {
            switch (_context12.prev = _context12.next) {
                case 0:
                    _context12.next = 2;
                    return 1;

                case 2:
                    _context12.next = 4;
                    return 2;

                case 4:
                case "end":
                    return _context12.stop();
            }
        }
    }, _marked[7], this);
}
function createColorIterator() {
    return regeneratorRuntime.wrap(function createColorIterator$(_context13) {
        while (1) {
            switch (_context13.prev = _context13.next) {
                case 0:
                    _context13.next = 2;
                    return "red";

                case 2:
                    _context13.next = 4;
                    return "green";

                case 4:
                case "end":
                    return _context13.stop();
            }
        }
    }, _marked[8], this);
}
function createCombinedIterator() {
    return regeneratorRuntime.wrap(function createCombinedIterator$(_context14) {
        while (1) {
            switch (_context14.prev = _context14.next) {
                case 0:
                    return _context14.delegateYield(createNumberIterator(), "t0", 1);

                case 1:
                    return _context14.delegateYield(createColorIterator(), "t1", 2);

                case 2:
                    _context14.next = 4;
                    return true;

                case 4:
                case "end":
                    return _context14.stop();
            }
        }
    }, _marked[9], this);
}
var _iterator = createCombinedIterator();
console.log(_iterator.next()); // "{ value: 1, done: false }"
console.log(_iterator.next()); // "{ value: 2, done: false }"
console.log(_iterator.next()); // "{ value: "red", done: false }"
console.log(_iterator.next()); // "{ value: "green", done: false }"
console.log(_iterator.next()); // "{ value: true, done: false }"
console.log(_iterator.next()); // "{ value: undefined, done: true }"


//
function createNumberIterator() {
    return regeneratorRuntime.wrap(function createNumberIterator$(_context15) {
        while (1) {
            switch (_context15.prev = _context15.next) {
                case 0:
                    _context15.next = 2;
                    return 1;

                case 2:
                    _context15.next = 4;
                    return 2;

                case 4:
                    return _context15.abrupt("return", 3);

                case 5:
                case "end":
                    return _context15.stop();
            }
        }
    }, _marked[10], this);
}
function createRepeatingIterator(count) {
    var _i5;

    return regeneratorRuntime.wrap(function createRepeatingIterator$(_context16) {
        while (1) {
            switch (_context16.prev = _context16.next) {
                case 0:
                    _i5 = 0;

                case 1:
                    if (!(_i5 < count)) {
                        _context16.next = 7;
                        break;
                    }

                    _context16.next = 4;
                    return "repeat";

                case 4:
                    _i5++;
                    _context16.next = 1;
                    break;

                case 7:
                case "end":
                    return _context16.stop();
            }
        }
    }, _marked[11], this);
}
function createCombinedIterator() {
    var result;
    return regeneratorRuntime.wrap(function createCombinedIterator$(_context17) {
        while (1) {
            switch (_context17.prev = _context17.next) {
                case 0:
                    return _context17.delegateYield(createNumberIterator(), "t0", 1);

                case 1:
                    result = _context17.t0;
                    return _context17.delegateYield(createRepeatingIterator(result), "t1", 3);

                case 3:
                case "end":
                    return _context17.stop();
            }
        }
    }, _marked[12], this);
}
var iterator_ = createCombinedIterator();
console.log(iterator_.next()); // "{ value: 1, done: false }"
console.log(iterator_.next()); // "{ value: 2, done: false }"
console.log(iterator_.next()); // "{ value: "repeat", done: false }"
console.log(iterator_.next()); // "{ value: "repeat", done: false }"
console.log(iterator_.next()); // "{ value: "repeat", done: false }"
console.log(iterator_.next()); // "{ value: undefined, done: true }"

//
function createNumberIterator() {
    return regeneratorRuntime.wrap(function createNumberIterator$(_context18) {
        while (1) {
            switch (_context18.prev = _context18.next) {
                case 0:
                    _context18.next = 2;
                    return 1;

                case 2:
                    _context18.next = 4;
                    return 2;

                case 4:
                    return _context18.abrupt("return", 3);

                case 5:
                case "end":
                    return _context18.stop();
            }
        }
    }, _marked[13], this);
}
function createRepeatingIterator(count) {
    var _i6;

    return regeneratorRuntime.wrap(function createRepeatingIterator$(_context19) {
        while (1) {
            switch (_context19.prev = _context19.next) {
                case 0:
                    _i6 = 0;

                case 1:
                    if (!(_i6 < count)) {
                        _context19.next = 7;
                        break;
                    }

                    _context19.next = 4;
                    return "repeat";

                case 4:
                    _i6++;
                    _context19.next = 1;
                    break;

                case 7:
                case "end":
                    return _context19.stop();
            }
        }
    }, _marked[14], this);
}
function createCombinedIterator() {
    var result;
    return regeneratorRuntime.wrap(function createCombinedIterator$(_context20) {
        while (1) {
            switch (_context20.prev = _context20.next) {
                case 0:
                    return _context20.delegateYield(createNumberIterator(), "t0", 1);

                case 1:
                    result = _context20.t0;
                    return _context20.delegateYield(createRepeatingIterator(result), "t1", 3);

                case 3:
                case "end":
                    return _context20.stop();
            }
        }
    }, _marked[15], this);
}
var iterator_1 = createCombinedIterator();
console.log(iterator_1.next()); // "{ value: 1, done: false }"
console.log(iterator_1.next()); // "{ value: 2, done: false }"
console.log(iterator_1.next()); // "{ value: "repeat", done: false }"
console.log(iterator_1.next()); // "{ value: "repeat", done: false }"
console.log(iterator_1.next()); // "{ value: "repeat", done: false }"
console.log(iterator_1.next()); // "{ value: undefined, done: true }"

//
function createNumberIterator() {
    return regeneratorRuntime.wrap(function createNumberIterator$(_context21) {
        while (1) {
            switch (_context21.prev = _context21.next) {
                case 0:
                    _context21.next = 2;
                    return 1;

                case 2:
                    _context21.next = 4;
                    return 2;

                case 4:
                    return _context21.abrupt("return", 3);

                case 5:
                case "end":
                    return _context21.stop();
            }
        }
    }, _marked[16], this);
}
function createRepeatingIterator(count) {
    var _i7;

    return regeneratorRuntime.wrap(function createRepeatingIterator$(_context22) {
        while (1) {
            switch (_context22.prev = _context22.next) {
                case 0:
                    _i7 = 0;

                case 1:
                    if (!(_i7 < count)) {
                        _context22.next = 7;
                        break;
                    }

                    _context22.next = 4;
                    return "repeat";

                case 4:
                    _i7++;
                    _context22.next = 1;
                    break;

                case 7:
                case "end":
                    return _context22.stop();
            }
        }
    }, _marked[17], this);
}
function createCombinedIterator() {
    var result;
    return regeneratorRuntime.wrap(function createCombinedIterator$(_context23) {
        while (1) {
            switch (_context23.prev = _context23.next) {
                case 0:
                    return _context23.delegateYield(createNumberIterator(), "t0", 1);

                case 1:
                    result = _context23.t0;
                    _context23.next = 4;
                    return result;

                case 4:
                    return _context23.delegateYield(createRepeatingIterator(result), "t1", 5);

                case 5:
                case "end":
                    return _context23.stop();
            }
        }
    }, _marked[18], this);
}
var iterator_2 = createCombinedIterator();
console.log(iterator_2.next()); // "{ value: 1, done: false }"
console.log(iterator_2.next()); // "{ value: 2, done: false }"
console.log(iterator_2.next()); // "{ value: 3, done: false }"
console.log(iterator_2.next()); // "{ value: "repeat", done: false }"
console.log(iterator_2.next()); // "{ value: "repeat", done: false }"
console.log(iterator_2.next()); // "{ value: "repeat", done: false }"
console.log(iterator_2.next()); // "{ value: undefined, done: true }"


//Asynchronous Task Running
var fs = require("fs");
fs.readFile("config.json", function (err, contents) {
    if (err) {
        throw err;
    }
    doSomethingWith(contents);
    console.log("Done");
});

//A Simple Task Runner
function run(taskDef) {
    // create the iterator, make available elsewhere
    var task = taskDef();
    // start the task
    var result = task.next();
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

run(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context24) {
        while (1) {
            switch (_context24.prev = _context24.next) {
                case 0:
                    console.log(1);
                    _context24.next = 3;
                    return;

                case 3:
                    console.log(2);
                    _context24.next = 6;
                    return;

                case 6:
                    console.log(3);

                case 7:
                case "end":
                    return _context24.stop();
            }
        }
    }, _callee2, this);
}));

//Task Running with Data
function run(taskDef) {
    // create the iterator, make available elsewhere
    var task = taskDef();
    // start the task
    var result = task.next();
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

run(regeneratorRuntime.mark(function _callee3() {
    var value;
    return regeneratorRuntime.wrap(function _callee3$(_context25) {
        while (1) {
            switch (_context25.prev = _context25.next) {
                case 0:
                    _context25.next = 2;
                    return 1;

                case 2:
                    value = _context25.sent;

                    console.log(value); // 1
                    _context25.next = 6;
                    return value + 3;

                case 6:
                    value = _context25.sent;

                    console.log(value); // 4

                case 8:
                case "end":
                    return _context25.stop();
            }
        }
    }, _callee3, this);
}));

//An Asynchronous Task Runner
function fetchData() {
    return function (callback) {
        callback(null, "Hi!");
    };
}

function fetchData() {
    return function (callback) {
        setTimeout(function () {
            callback(null, "Hi!");
        }, 50);
    };
}

//
function run(taskDef) {
    // create the iterator, make available elsewhere
    var task = taskDef();
    // start the task
    var result = task.next();
    // recursive function to keep calling next()
    function step() {
        // if there's more to do
        if (!result.done) {
            if (typeof result.value === "function") {
                result.value(function (err, data) {
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
    return function (callback) {
        fs.readFile(filename, callback);
    };
}

//
run(regeneratorRuntime.mark(function _callee4() {
    var contents;
    return regeneratorRuntime.wrap(function _callee4$(_context26) {
        while (1) {
            switch (_context26.prev = _context26.next) {
                case 0:
                    _context26.next = 2;
                    return readFile("config.json");

                case 2:
                    contents = _context26.sent;

                    doSomethingWith(contents);
                    console.log("Done");

                case 5:
                case "end":
                    return _context26.stop();
            }
        }
    }, _callee4, this);
}));