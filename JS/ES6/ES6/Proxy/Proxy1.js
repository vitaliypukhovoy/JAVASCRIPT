let target = {}

let proxy = new Proxy(target, {});

proxy.name ="proxy";
console.log(proxy.name);
console.log(proxy.target);

target.name= "target";
console.log(proxy.name);
console.log(proxy.target)







// var target = {}
// var handler = {}
// var proxy = new Proxy(target, handler)
// proxy.a = 'b'
// console.log(target.a)
// // <- 'b'
// console.log(proxy.c === undefined)
// // <- true
//
//
// var handler = {
// get (target, key) {
//     console.info(`Get on property "${key}"`)
//     return target[key]
// }
// }
// var target = {}
// var proxy = new Proxy(target, handler)
// proxy.a = 'b'
// proxy.a
// // <- 'Получаем свойство "a"'
// proxy.b
// // <- 'Получаем свойство "b"'