var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var name = 'Max';
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
var myColor = 101 /* blue */;
console.log(myColor);
//any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
//function
function returnMyName() {
    return name;
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
//-------------------------------------------------------------------------
var burger = 'hamburger', calories = 300, tasty = true; // Boolean
function speak1(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
speak(burger, calories);
//var tasty: boolean = "I haven't tried it yet";  //error
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
// ��������� �� ������������ ��������� �����
speak("tripple cheesburger", 5);
// �� ���� ��������, ���� ��'��� �������� ��������
// ����� �� ������ ���� ����������, �� ��� ����������� � ��'���� ������ �������� (� ����������� ��������� ��������)
function speak2(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
// �� ��������� ��'���, �� ���������� ���������� Food. ��������, ��� ������������ �����������
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speak2(ice_cream);
//class
//-------------------------------------------------------------------------------
var Menu = (function () {
    // ������� �����������.
    function Menu(item_list, total_pages) {
        // ������� ����� this ����'������.
        this.items = item_list;
        this.pages = total_pages;
    }
    // ������
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
})();
// ��������� ������ ��'���� ���� Menu.
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
// ���������� ����� list().
sundayMenu.list();
//inherit
//------------------------------------------------------------------------
var HappyMeal = (function (_super) {
    __extends(HappyMeal, _super);
    // ����������� ��������������
    // ���������� ����� �����������.
    function HappyMeal(item_list, total_pages) {
        // ���� �� ������ �������������� ������������ �����������, �� �� �������������� ������� super
        _super.call(this, item_list, total_pages);
    }
    // �� � �����������, ������ ����� ��������������. ��� �� ����� �������������
    HappyMeal.prototype.list = function () {
        console.log("Our special menu for children:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return HappyMeal;
})(Menu);
// ��������� ����� ��'���
var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);
// ����� ����� ���� ���� ���������� ������������.
menu_for_children.list();
//# sourceMappingURL=app.js.map