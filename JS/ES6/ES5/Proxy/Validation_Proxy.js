'use strict';

var validator = {
    set: function set(target, key, value) {
        if (key === 'age') {
            if (typeof value !== 'number' || Number.isNaN(value)) {
                throw new TypeError('Age should be number');
            }
            if (value <= 0) {
                throw new TypeError('Age should be a positive number');
            }
        }
        return true;
    }
};
var person = { age: 27 };
var proxy = new Proxy(person, validator);
proxy.age = 'foo';
// <- TypeError: Age должен быть  числом
proxy.age = NaN;
// <- TypeError: Age должен быть числом
proxy.age = 0;
// <- TypeError: Age должен быть положительным числом
proxy.age = 28;
console.log(person.age);
// <- 28