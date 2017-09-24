"use strict";

// first version
!function () {
    var _this = this;

    var a = {
        arr: [7],
        method1: function myMethod() {
            console.log(this.arr);
        },
        method2: function method2() {
            console.log(_this.arr);
        }
    };
    a.method1();
    a.method2();
}();

// second version
!function () {
    var arr = [8];
    var a = {
        arr: [7],
        method1: function myMethod() {
            console.log(this.arr);
        },
        method2: function method2() {
            console.log(arr);
        }
    };
    a.method1();
    a.method2();
}();

// third version
var a1 = { arr: [5], method: function method() {
        var _this2 = this;

        return function () {
            return console.log(_this2.arr);
        };
    } };

//fourth version

var arr = [8];
var a2 = {
    arr: [7],
    method1: function myMethod() {
        console.log(this.arr);
    },
    method2: function method2() {
        console.log(arr);
    }

};
a2.method1();
a2.method2();