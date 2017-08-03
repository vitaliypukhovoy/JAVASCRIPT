let  myName :string  = 'Max12345';

let age : number = 30;
console.log("eeee");

 let hasHobbies : boolean = true;
//Array
//my_arr: number[]; �� my_arr: Array<number>
 var hobbies : any[]= ['sassa','ssss'];
 console.log( typeof hobbies );

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



