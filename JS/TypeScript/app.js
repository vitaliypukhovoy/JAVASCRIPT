var name = 'Max';
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
var burger = 'hamburger', calories = 300, tasty = true; // Boolean
function speak1(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
speak(burger, calories);
//var tasty: boolean = "I haven't tried it yet";  //error
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
// Аргументи не відповідають потрібним типам
speak("tripple cheesburger", 5);
//# sourceMappingURL=app.js.map