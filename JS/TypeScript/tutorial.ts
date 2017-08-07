//-------------------------------------------------------------------------
let burger: string = 'hamburger',     // String
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

speak("tripple cheesburger", 5);


interface Food {
    name: string;
    calories: number;
}


function speak2(food: Food): void{
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}

let ice_cream = {
    name: "ice cream",
    calories: 200
}

speak2(ice_cream);


//class
//-------------------------------------------------------------------------------
class Menu {
   // (protected)
    items: Array<string>;
    pages: number;

    //
    constructor(item_list: Array<string>, total_pages: number) {
        // this
        this.items = item_list;
        this.pages = total_pages;
    }

    //
    list(): void {
        console.log("Our menu for today:");
        for(let i=0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }

}

// Menu.
let sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

//list().
sundayMenu.list();


//inherit
//------------------------------------------------------------------------

class HappyMeal extends Menu {

    constructor(item_list: Array<string>, total_pages: number) {
  // super
        super(item_list, total_pages);
    }


    list(): void{
        console.log("Our special menu for children:");
        for(let i=0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }

    }
}

//
let menu_for_children = new HappyMeal(["candy","drink","toy"], 1);

menu_for_children.list()


// interface and abstract class
//------------------------------------------------------------
interface C {
    abc: boolean;
}

interface D {
    dd: number[];
}

abstract class B { // компилятор "не позволит" создать экземпляр этого класса
    constructor(public name: string) {
        // аргумент name в конструкторе описан так,
        // чтобы автоматически было создано свойство name
        // с публичным уровнем доступа
    }
    test(a, b) {
        return a === b; // для этой функции типы не нужны
    }
    abstract length(a, b: string): number // класс потомок обязан
                                          // имплементировать этот метод
    // или объявить его снова абстрактным (как и сам класс)
}

class A extends B implements C, D {
    static x: number = 5
    public abc = true
    public dd = [10, 11]
    constructor() {
        super("A"); // компилятор будет настаивать, чтобы в первой строке
                    // конструктора вызвали конструктор предка
    }
    length(a, b: string): number { // обещанная имплементация
        return (a + b).length;
    }
}

//---------------------------------------------------------------------------

interface IShape {
    color: string;
}

interface ISquare extends IShape {
    // интерфейсы наследуются простым объединением
    sideLength: number;
}

// создание переменной с пустым объектом, но с указанием его типа или типа структуры
let square = <ISquare> { };
square.color = "blue";
square.sideLength = 10;

// попытка добавить новое свойство
//square.a = 1;
// вызовет предупреждение -- этого свойства нет ни в одном
// из интерфейсов.

//--------------------------------------------------------------------------------

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result != -1;
}

//Generics
//--------------------------------------------------------------------------------

    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

let myGenericNumber = new GenericNumber<number>();

myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
    return x + y;
};

//---------------------------------------------------------------------------------