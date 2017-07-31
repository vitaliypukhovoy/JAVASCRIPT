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

// Аргументи не відповідають потрібним типам
speak("tripple cheesburger", 5);

// Оголошення нашого інтерфейсу
interface Food {
    name: string;
    calories: number;
}

// Ми явно вказуємо, який об'єкт очікуємо прийняти
// також ми можемо бути впевненими, що всі властивості в об'єкті будуть присутні (і міститимуть правильні значення)
function speak2(food: Food): void{
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}

// Ми створюємо об'єкт, що відповідає інтерфейсу Food. Зауважте, тип присвоюється автоматично
var ice_cream = {
    name: "ice cream",
    calories: 200
}

speak2(ice_cream);


//class
//-------------------------------------------------------------------------------
class Menu {
    // Наші властивості
    // Без явного вказання вони публічні, але можуть бути приватними та захищеними (protected)
    items: Array<string>;  // Пункти меню, масив стрічок.
    pages: number;         // Скільки сторінок в нашому меню.

    // Простий конструктор.
    constructor(item_list: Array<string>, total_pages: number) {
        // Ключове слово this обов'язкове.
        this.items = item_list;
        this.pages = total_pages;
    }

    // Методи
    list(): void {
        console.log("Our menu for today:");
        for(var i=0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }

}

// Створення нового об'єкту типу Menu.
var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

// Викликаємо метод list().
sundayMenu.list();


//inherit
//------------------------------------------------------------------------

class HappyMeal extends Menu {
    // Властивості успадковуються

    // Оголошуємо новий конструктор.
    constructor(item_list: Array<string>, total_pages: number) {
        // Коли ми хочемо ініціалізувати батьківський конструктор, то ми використовуємо функцію super
        super(item_list, total_pages);
    }

    // Як і властивості, методи також успадковуються. Але їх можна перевизначити
    list(): void{
        console.log("Our special menu for children:");
        for(var i=0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }

    }
}

// Створюємо новий об'єкт
var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);

// Тепер перед меню буде спеціальне повідомлення.
menu_for_children.list()

