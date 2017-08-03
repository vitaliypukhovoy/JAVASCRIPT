var myName = 'Max12345';
var age = 30;
console.log("eeee");
var hasHobbies = true;
//Array
//my_arr: number[]; �� my_arr: Array<number>
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
var myColor = Color.blue;
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
//let CanBeNull : number | null = 12;
// CanBeNull = null;
// let canAlsoBeNull;
// canAlsoBeNull = null;
// let canThisBeAny :any = null;
// canThisBeAny = 12;
//ECMA 6
//----------------------------------------------------------------------
var myName1 = 'Max1';
var age1 = 30;
var anything;
anything = 12;
//arrow function
console.log('ARROW FUNCTION');
var addNumber = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumber(10, 3));
var multyplyNumber = function (number1, number2) {
    return number1 * number2;
};
console.log(multyplyNumber(3, 4));
var multyplyNumber2 = function (number1, number2) { return number1 * number2; };
console.log(multyplyNumber(3, 5));
var greet = function () {
    console.log('Hello');
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Manu");
// Default parameters
console.log('Default PARAMETERS');
var countDown = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 5; }
    console.log(20);
    while (start > 0) {
        start--;
    }
    ;
    console.log("Done", start);
    console.log("Done", end);
};
countDown(20);
// rest & Spread operator
console.log('REST & SPREAD');
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3)); //list of numbers
console.log(Math.max.apply(Math, numbers)); //array of numbers
function makeArray(arg1, arg2) {
    return [arg1, arg2];
}
;
function makeArray2(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
;
console.log(makeArray(1, 2));
console.log(makeArray2("Max", 1, 2, 3));
//Destructing array
console.log('DISTRACTING');
var myHobbies = ["Cooking", "Sport"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
// const  hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//Destructing  object
var userData1 = { userName: "Max", ages: 27 };
//const  userName = userData1.userName;
//const {userName, ages} = userData1;
var myName3 = userData1.userName, myAge = userData1.ages;
console.log(myName3, myAge);
// Template literal
console.log('Template literal');
var userName = "Max";
//const greeting = "Hello, I'm " + userName;
var greeting = " This is a heading!\nI'm " + userName + "\nThis is cool";
console.log(greeting);
// 
