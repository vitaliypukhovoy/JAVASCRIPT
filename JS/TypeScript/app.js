var myName = 'Max88';
var age = 30;
console.log("eeee");
var hasHobbies = true;
//Array
//my_arr: number[]; та my_arr: Array<number>
var hobbies = ['sassa', 'ssss'];
console.log(typeof hobbies);
//tuples
var adress = ["saassssss", 88];
//enum
var Color;
(function (Color) {
    Color[Color["grey"] = 0] = "grey";
    Color[Color["green"] = 100] = "green";
    Color[Color["blue"] = 101] = "blue"; //2
})(Color || (Color = {}));
var myColor = 101 /* blue */;
console.log(myColor);
//any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
//function
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log('Hello');
}
console.log(returnMyName());
//arguments type
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 5));
var myMultiply;
// myMultiply =sayHello;
// myMultiply();
myMultiply = multiply;
console.log(multiply(2, 5));
var userData = {
    name: "Max",
    age: 27
};
// userData=
//{
// a: 'Max',
// b: 27
//};
var complex = {
    data: [100, .99, 10],
    output: function (all) {
        return this.data;
    }
};
//complex ={};
var complex2 = {
    data: [100, .99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex3 = {
    data: [100, .99, 10],
    output: function (all) {
        return this.data;
    }
};
//union type
var myRealAge = 27;
myRealAge = "27";
// myRealAge = true;
//check types
var finalValue = 30;
if (typeof finalValue == 'number') {
    console.log("Final value is number");
}
;
///never
//function neverReturn(): never {
//    throw  new Error ('An error');
//};
//Nullable types
//var CanBeNull : number | null = 12;
// CanBeNull = null;
// var canAlsoBeNull;
// canAlsoBeNull = null;
// var canThisBeAny :any = null;
// canThisBeAny = 12;
//# sourceMappingURL=app.js.map