 var   name :string = 'Max';


 var age : number = 30;
console.log("eeee");

 var hasHobbies : boolean = true;
//Array
//my_arr: number[]; та my_arr: Array<number>
 var hobbies : any[]= ['sassa','ssss'];
 console.log( typeof hobbies );

 //tuples


 var adress : [string, number ]  = ["saassssss", 88];

//enum

 enum Color{
     grey, //0
     green =100, //1
     blue //2
 }

 var myColor :Color = Color.blue;
 console.log(myColor);


 //any
 var car : any = 'BMW';
 console.log(car );

  car    = {brand:'BMW' , series :3};

 console.log(car );

//function
 function returnMyName():string
 {
   return name;
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

var myMultiply :(a:number,b:number) => number;
// myMultiply =sayHello;
// myMultiply();
 myMultiply = multiply;
 console.log(multiply(2, 5));



