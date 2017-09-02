// first version
!(function() {
    var a = {
        arr: [7],
        method1: function myMethod() {
            console.log(this.arr);
        },
        method2: () => {
            console.log(this.arr);
        }
    };
    a.method1();
    a.method2();
})();

// second version
!(function() {
    var arr = [8];
    var a = {
        arr: [7],
        method1: function myMethod() {
            console.log(this.arr);
        },
        method2: () => {
            console.log(arr);
        }
    };
    a.method1();
    a.method2();
})();

// third version
var a1 = {arr:[5], method : function(){  return ()=>console.log(this.arr)}};

//fourth version

var arr = [8];
var a2 = {
    arr: [7],
    method1: function myMethod() {
        console.log(this.arr);
    },
    method2: ()=> {
        console.log(arr);}

};
a2.method1();
a2.method2();