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

