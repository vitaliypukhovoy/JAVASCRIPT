'use strict';

var foo = { bar: 'pony', baz: 3 };
var bar = foo.bar,
    baz = foo.baz;

console.log(bar);
// <- 'pony'
console.log(baz);
// <- 3