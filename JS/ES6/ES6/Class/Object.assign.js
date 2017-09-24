let user = { name: "Вася" };
let visitor = { isAdmin: false, visits: true };
let admin = { isAdmin: true };

Object.assign(user, visitor, admin);

// user <- visitor <- admin
console.log(JSON.stringify(user));

let user2 = { name: "Вася", isAdmin: false };

// clone = пустой объект + все свойства user
let clone = Object.assign({}, user2);



