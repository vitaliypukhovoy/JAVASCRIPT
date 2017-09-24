"use strict";

var user = { name: "Вася" };
var visitor = { isAdmin: false, visits: true };
var admin = { isAdmin: true };

Object.assign(user, visitor, admin);

// user <- visitor <- admin
console.log(JSON.stringify(user));

var user2 = { name: "Вася", isAdmin: false };

// clone = пустой объект + все свойства user
var clone = Object.assign({}, user2);