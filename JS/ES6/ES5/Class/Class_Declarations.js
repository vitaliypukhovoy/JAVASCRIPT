"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonClass = function () {
    // equivalent of the PersonType constructor
    function PersonClass(name) {
        _classCallCheck(this, PersonClass);

        this.name = name;
    }
    // equivalent of PersonType.prototype.sayName


    _createClass(PersonClass, [{
        key: "sayName",
        value: function sayName() {
            console.log(this.name);
        }
    }]);

    return PersonClass;
}();

var person = new PersonClass("Nicholas");
person.sayName(); // outputs "Nicholas"
console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true
console.log(typeof PersonClass === "undefined" ? "undefined" : _typeof(PersonClass)); // "function"
console.log(_typeof(PersonClass.prototype.sayName)); // "function"