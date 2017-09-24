"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Barbarian = function () {
    function Barbarian(name) {
        _classCallCheck(this, Barbarian);

        this.name = name;
        this["character class"] = "barbarian";
        this.hp = 200;
        this.weapons = [];
    }

    _createClass(Barbarian, [{
        key: "talks",
        value: function talks() {
            console.log("I am " + this.name + " !!!");
        }
    }, {
        key: "equipsWeapon",
        value: function equipsWeapon(weapon) {
            weapon.equipped = true;
            this.weapons.push(weapon);
            console.log(this.name + " grabs a " + weapon.name + " from " + "the cavern floor");
        }
    }, {
        key: "toString",
        value: function toString() {
            return this.name;
        }
    }, {
        key: "saysHi",
        value: function saysHi() {
            console.log("Hi! I am " + this.name);
        }
    }]);

    return Barbarian;
}();

;

var conan = new Barbarian('Conan');

console.log("Conan is a barbarian: " + ("" + (conan instanceof Barbarian)));
// => Conan is a barbarian: true

//conan.equipsWeapon('steel sword');

var Shaman = function (_Barbarian) {
    _inherits(Shaman, _Barbarian);

    function Shaman(name) {
        _classCallCheck(this, Shaman);

        return _possibleConstructorReturn(this, (Shaman.__proto__ || Object.getPrototypeOf(Shaman)).call(this, name));
    }

    _createClass(Shaman, [{
        key: "heals",
        value: function heals(target) {
            console.log(this + " heals " + target + " (+ 50hp)");
            target.hp += 50;
        }
    }]);

    return Shaman;
}(Barbarian);

var WhiteShaman = function (_Shaman) {
    _inherits(WhiteShaman, _Shaman);

    function WhiteShaman() {
        _classCallCheck(this, WhiteShaman);

        return _possibleConstructorReturn(this, (WhiteShaman.__proto__ || Object.getPrototypeOf(WhiteShaman)).apply(this, arguments));
    }

    _createClass(WhiteShaman, [{
        key: "castsSlowCurse",
        value: function castsSlowCurse(target) {
            console.log(this + " casts slow on " + target + "." + (" " + target + " seems to move slower"));
            if (target.curses) target.curses.push('slow');else target.curses = ['slow'];
        }
    }, {
        key: "heals",
        value: function heals(target) {
            // instead of Shaman.prototype.heals.call(this, target);
            // you can use super
            _get(WhiteShaman.prototype.__proto__ || Object.getPrototypeOf(WhiteShaman.prototype), "heals", this).call(this, target);
            console.log(this + " cleanses all negatives effects " + ("in " + target));
            target.curses = [];
            target.poisons = [];
        }
    }]);

    return WhiteShaman;
}(Shaman);

var khaaar = new WhiteShaman('Khaaar');
khaaar.castsSlowCurse(conan);
// => Khaaar casts slow on Conan, the Barbarian.
//    Conan seems to move slower

khaaar.heals(conan);

// => Khaaar cleanses all negatives effects in Conan