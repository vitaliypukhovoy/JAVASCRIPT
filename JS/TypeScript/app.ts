 var   name :string = 'Max';


 var age : number = 30;
console.log("eeee");

 var hasHobbies : boolean = true;
//Array
//my_arr: number[]; �� my_arr: Array<number>
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

 //-------------------------------------------------------------------------
 var burger: string = 'hamburger',     // String
     calories: number = 300,           // Numeric
     tasty: boolean = true;            // Boolean

 function speak1(food: string, energy: number): void {
     console.log("Our " + food + " has " + energy + " calories.");
 }

 speak(burger, calories);

 //var tasty: boolean = "I haven't tried it yet";  //error

 function speak(food: string, energy: number): void{
     console.log("Our " + food + " has " + energy + " calories.");
 }

 // ��������� �� ���������� �������� �����
 speak("tripple cheesburger", 5);

 // ���������� ������ ����������
 interface Food {
     name: string;
     calories: number;
 }

 // �� ���� �������, ���� ��'��� ������� ��������
 // ����� �� ������ ���� ����������, �� �� ���������� � ��'��� ������ ������� (� ���������� �������� ��������)
 function speak2(food: Food): void{
     console.log("Our " + food.name + " has " + food.calories + " calories.");
 }

 // �� ��������� ��'���, �� ������� ���������� Food. ��������, ��� ������������ �����������
 var ice_cream = {
     name: "ice cream",
     calories: 200
 }

 speak2(ice_cream);


 //class
//-------------------------------------------------------------------------------
 class Menu {
     // ���� ����������
     // ��� ������ �������� ���� ������, ��� ������ ���� ���������� �� ���������� (protected)
     items: Array<string>;  // ������ ����, ����� ������.
     pages: number;         // ������ ������� � ������ ����.

     // ������� �����������.
     constructor(item_list: Array<string>, total_pages: number) {
         // ������� ����� this ����'������.
         this.items = item_list;
         this.pages = total_pages;
     }

     // ������
     list(): void {
         console.log("Our menu for today:");
         for(var i=0; i < this.items.length; i++) {
             console.log(this.items[i]);
         }
     }

 }

 // ��������� ������ ��'���� ���� Menu.
 var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

 // ��������� ����� list().
 sundayMenu.list();


 //inherit
 //------------------------------------------------------------------------

 class HappyMeal extends Menu {
     // ���������� ��������������

     // ��������� ����� �����������.
     constructor(item_list: Array<string>, total_pages: number) {
         // ���� �� ������ ������������ ����������� �����������, �� �� ������������� ������� super
         super(item_list, total_pages);
     }

     // �� � ����������, ������ ����� ��������������. ��� �� ����� �������������
     list(): void{
         console.log("Our special menu for children:");
         for(var i=0; i < this.items.length; i++) {
             console.log(this.items[i]);
         }

     }
 }

 // ��������� ����� ��'���
 var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);

 // ����� ����� ���� ���� ���������� �����������.
 menu_for_children.list()


