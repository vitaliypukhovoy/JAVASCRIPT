'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sword = function () {
         function Sword(material, damage, weight) {
                  _classCallCheck(this, Sword);

                  this.material = material;
                  this.damage = damage;
                  this.weight = weight;
         }

         _createClass(Sword, [{
                  key: 'toString',
                  value: function toString() {
                           return this.material + ' sword (+' + this.damage + ')';
                  }

                  // new static method

         }], [{
                  key: 'getRandom',
                  value: function getRandom() {
                           var randomMaterial = 'iron',
                               damage = Math.random(Math.random() * 10),
                               randomWeight = '5 stones';
                           return new Sword(randomMaterial, damage, randomWeight);
                  }
         }, {
                  key: 'getRandom2',
                  value: function getRandom2() {
                           // super complex randomness algorithm
                           // to pick a material :) cheater!
                           var randomMaterial = Sword.materials[0],
                               damage = Math.random(Math.random() * 10),
                               randomWeight = '5 stones';

                           return new Sword(randomMaterial, damage, randomWeight);
                  }
         }]);

         return Sword;
}();

console.log(Sword.getRandom());

Sword.materials = ['wood', 'iron', 'steel'];

console.log(Sword.materials);
// => ['wood', 'iron', 'steel']
console.log(Sword.getRandom2());