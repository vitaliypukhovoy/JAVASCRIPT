"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrivateBarbarian = function () {
      function PrivateBarbarian(name) {
            _classCallCheck(this, PrivateBarbarian);

            // private members
            var weapons = [];

            // public members
            this.name = name;
            this["character class"] = "barbarian";
            this.hp = 200;

            this.equipsWeapon = function (weapon) {
                  weapon.equipped = true;

                  // the equipsWeapon method encloses
                  // the weapons variable
                  weapons.push(weapon);

                  console.log(this.name + " grabs a " + weapon.name + " " + "from the cavern floor");
            };

            this.toString = function () {
                  if (weapons.length > 0) {
                        return this.name + " wields a " + ("" + weapons.find(function (w) {
                              return w.equipped;
                        }).name);
                  } else return this.name;
            };
      }

      _createClass(PrivateBarbarian, [{
            key: "talks",
            value: function talks() {
                  console.log("I am " + this.name + " !!!");
            }
      }, {
            key: "saysHi",
            value: function saysHi() {
                  console.log("Hi! I am " + this.name);
            }
      }]);

      return PrivateBarbarian;
}();

;

var privateBarbarian = new PrivateBarbarian('timido');
privateBarbarian.equipsWeapon({ name: 'mace' });
// => timido grabs a mace from the cavern floor

console.log("Barbarian weapons: " + privateBarbarian.weapons);
// => Barbarian weapons: undefined

console.log(privateBarbarian.toString());