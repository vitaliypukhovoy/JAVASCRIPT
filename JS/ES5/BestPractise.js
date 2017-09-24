// плохо
var divs = document.querySelectorAll('div');

for (i = 0; i < divs.length; i++) {
    console.log(divs[i].innerHTML);
}

var divs = document.querySelectorAll('div');

[].slice.call(divs).forEach(function (div) {
    console.log(div.innerHTML);
});


// плохо
var args = [].slice.call(arguments);

// хорошо
var i;
var args = new Array(arguments.length);
for (i = 0; i < args.length; i++) {
    args[i] = arguments[i];
}

// плохо
var values = [1, 2, 3];
var i;

for (i = 0; i < values.length; i++) {
    setTimeout(function () {
        console.log(values[i]);
    }, 1000 * i);
}

// плохо
var values = [1, 2, 3];
var i;

for (i = 0; i < values.length; i++) {
    setTimeout(function (i) {
        return function () {
            console.log(values[i]);
        };
    }(i), 1000 * i);
}

// хорошо
var values = [1, 2, 3];
var i;

for (i = 0; i < values.length; i++) {
    setTimeout(function (i) {
        console.log(values[i]);
    }, 1000 * i, i);
}

// хорошо
var values = [1, 2, 3];
var i;

for (i = 0; i < values.length; i++) {
    wait(i);
}

function wait (i) {
    setTimeout(function () {
        console.log(values[i]);
    }, 1000 * i);
}

// лучше
[1, 2, 3].forEach(function (value, i) {
    setTimeout(function () {
        console.log(value);
    }, 1000 * i);
});

// плохо
function foo (car, black, turbine) {
    if (car) {
        if (black) {
            if (turbine) {
                return 'batman!';
            }
        }
    }
}

// плохо
function fn (condition) {
    if (condition) {
        // 10+ строк кода
    }
}

// хорошо
function foo (car, black, turbine) {
    if (!car) {
        return;
    }

    if (!black) {
        return;
    }

    if (!turbine) {
        return;
    }

    return 'batman!';
}

// хорошо
function fn (condition) {
    if (!condition) {
        return;
    }

    // 10+ строк кода
}

// плохо
function isEmptyString (text) {
    return text == '';
}

isEmptyString(0);
// <- true

// хорошо
function isEmptyString (text) {
    return text === '';
}

isEmptyString(0);
// <- false

// плохо
if (err) throw err;

// хорошо
if (err) { throw err; }

// лучше
if (err) {
    throw err;
}

// хорошо
var foo = 1;
var bar;

if (foo > 1) {
    bar = 2;
}

// плохо
var foo = 1;

if (foo > 1) {
    var bar = 2;
}

// приемлемо
var a = 'a';
var b = 2;
var i, j;

// плохо
var foo = 1,
    bar = 2;

var baz;
var pony;

var a
    , b;

// хорошо
var foo = 1;
var bar = 2;

var baz;
var pony;

var a;
var b;

// плохо
var message = 'oh hai ' + name + "!";

// хорошо
var message2 = 'oh hai ' + name + '!';

str = "a" + "b";
str2 += "c";
str3 = str.concat("d", "e");

str4 = ["a", "b", "c", "d", "e"].join("");

// standard string append
var str5 = "";
for (var i = 30000; i > 0; i--) {
    str5 += "String concatenation. ";
}

// array join faster
var str6 = "", sArr = [];
for (var i = 30000; i > 0; i--) {
    sArr[i] = "String concatenation. ";
}
str6 = sArr.join("");