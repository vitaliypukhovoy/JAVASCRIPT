let myName: string = 'Max12345';

let age: number = 30;
console.log("eeee");

let hasHobbies: boolean = true;
//Array
//my_arr: number[]; �� my_arr: Array<number>
let hobbies: any[] = ['sassa', 'ssss'];
console.log(typeof hobbies);

 //tuples


 let adress : [string, number ]  = ["saassssss", 88];

//enum

 enum Color{
     grey, //0
     green =100, //1
     blue //2
 }

 let myColor :Color = Color.blue;
 console.log(myColor);


 //any
 let car : any = 'BMW';
 console.log(car );

  car    = {brand:'BMW' , series :3};

 console.log(car );

//function
 function returnMyName():string
 {
   return myName;
 }

 console.log(returnMyName() );


//void

 function sayHello() : void
 {
     console.log('Hello' );
 }

 console.log(returnMyName() );


//arguments type
 function multiply(value1 :number ,value2 :number) : number
 {
     return value1*value2
 }

console.log(multiply(2, 5));

let myMultiply :(a:number,b:number) => number;
// myMultiply =sayHello;
// myMultiply();
 myMultiply = multiply;
 console.log(multiply(2, 5));

let userData :{name : string; age : number} =
 {
     name :"Max",
     age: 27
 };

 // userData=
 //{
 // a: 'Max',
 // b: 27
 //};


 let complex :{data: number[]; output :(all:boolean)=> number[]} = {
 data : [100,.99,10],
     output: function (all:boolean) : number [] {
     return this.data;
 }
 };

 //complex ={};

 let complex2 :{data: number[]; output :(all:boolean)=> number[]} = {
     data : [100,.99,10],
     output: function (all:boolean) : number [] {
         return this.data;
     }
 };

 type Complex = {data: number[]; output :(all:boolean)=> number[]};

 let complex3 :Complex = {
     data : [100,.99,10],
     output: function (all:boolean) : number [] {
         return this.data;
     }
 };


 //union type
 let myRealAge: number | string = 27;
 myRealAge = "27";
// myRealAge = true;


 //check types

 let finalValue = 30;
 if(typeof finalValue == 'number')
 {
     console.log("Final value is number");
 };

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

let myName1 :string = 'Max1';

let age1 : number = 30;

let anything ;

anything = 12;

//arrow function
console.log('ARROW FUNCTION')
const addNumber = function (number1: number, number2: number):number {

return number1+ number2;
}

console.log(addNumber(10,3))

const  multyplyNumber = (number1: number, number2: number) => {
   return number1*number2;
}
console.log(multyplyNumber(3,4))
const  multyplyNumber2 = (number1: number, number2: number) => number1*number2;
console.log(multyplyNumber(3,5))

const  greet = ()=>{
    console.log('Hello')
};
greet();

const  greetFriend = friend  => console.log(friend);

greetFriend("Manu");

// Default parameters
console.log('Default PARAMETERS');
const countDown = ( start:number = 10, end : number = start -5):void => {
    console.log(20);
  while (start >0) {
      start--;
  };
  console.log("Done",start);
  console.log("Done",end);
};
countDown(20);

// rest & Spread operator
console.log('REST & SPREAD');
const   numbers  = [1,10,99,-5];
console.log(Math.max(33,99,10,-3)); //list of numbers
console.log(Math.max(...numbers)); //array of numbers

function  makeArray(arg1: number, arg2: number){
  return [arg1,arg2];
};

function  makeArray2(name:string,...args: number []){
    return args;
};
console.log(makeArray(1,2));

console.log(makeArray2("Max",1,2,3));

//Destructing array

console.log('DISTRACTING');
const myHobbies = ["Cooking","Sport"];
const [hobby1, hobby2] = myHobbies;
// const  hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
console.log(hobby1 , hobby2);

//Destructing  object

const  userData1 = {userName:"Max", ages:27};
//const  userName = userData1.userName;
//const {userName, ages} = userData1;
const {userName: myName3, ages :myAge} = userData1;
console.log(myName3, myAge);

// Template literal

console.log('Template literal');
const userName = "Max";
//const greeting = "Hello, I'm " + userName;
const greeting = ` This is a heading!
I'm ${userName}
This is cool`;
console.log(greeting);



//