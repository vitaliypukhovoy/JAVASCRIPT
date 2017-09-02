let target = {
    name: "target"
};
let proxy = new Proxy(target, {
    set(trapTarget, key, value, receiver) {
        // ignore existing properties so as not to affect them
        if (!trapTarget.hasOwnProperty(key)) {
            if (isNaN(value)) {
                throw new TypeError("Property must be a number.")

            }
        }
        // add the property
        return Reflect.set(trapTarget, key, value, receiver);
    }
});
// adding a new property
proxy.count = 1;
console.log(proxy.count);       // 1
console.log(target.count);      // 1
// you can assign to name because it exists on target already
proxy.name = "proxy";
console.log(proxy.name);        // "proxy"
console.log(target.name);       // "proxy"
// throws an error
proxy.anotherName = "proxy";