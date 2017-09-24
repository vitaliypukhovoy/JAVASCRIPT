 class Barbarian {
       constructor(name){
             this.name = name;
             this["character class"] = "barbarian";
             this.hp = 200;
             this.weapons = [];
           }

       talks(){
             console.log("I am " + this.name + " !!!");
           }

       equipsWeapon(weapon){
             weapon.equipped = true;
             this.weapons.push(weapon);
             console.log(`${this.name} grabs a ${weapon.name} from ` +
                             `the cavern floor`);
           }

       toString(){
             return this.name;
           }

       saysHi(){
             console.log("Hi! I am " + this.name);
           }
     };

class Shaman extends Barbarian {
    constructor(name) {
        super(name);
    }

    heals(target) {
        console.log(`${this} heals ${target} (+ 50hp)`);
        target.hp += 50;
    }
}

class WhiteShaman extends Shaman {

    castsSlowCurse(target) {
        console.log(`${this} casts slow on ${target}.` +
            ` ${target} seems to move slower`);
        if (target.curses) target.curses.push('slow');
        else target.curses = ['slow'];
    }

    heals(target) {
        // instead of Shaman.prototype.heals.call(this, target);
        // you can use super
        super.heals(target);
        console.log(`${this} cleanses all negatives effects ` +
            `in ${target}`);
        target.curses = [];
        target.poisons = [];
    }
}


const khaaar = new WhiteShaman('Khaaar');
khaaar.castsSlowCurse(conan);
// => Khaaar casts slow on Conan, the Barbarian.
//    Conan seems to move slower

khaaar.heals(conan);

// => Khaaar cleanses all negatives effects in Conan

