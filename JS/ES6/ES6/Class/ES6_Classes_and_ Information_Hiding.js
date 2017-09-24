class PrivateBarbarian {

       constructor(name){
             // private members
             const weapons = [];

             // public members
             this.name = name;
             this["character class"] = "barbarian";
             this.hp = 200;

             this.equipsWeapon = function (weapon){
                   weapon.equipped = true;

                   // the equipsWeapon method encloses
                   // the weapons variable
                   weapons.push(weapon);

                   console.log(`${this.name} grabs a ${weapon.name} ` +
                                   `from the cavern floor`);
                 };

             this.toString = function(){
                   if (weapons.length > 0) {
                         return `${this.name} wields a ` +
                                    `${weapons.find(w => w.equipped).name}`;
                       } else return this.name
                 };
           }

       talks(){
             console.log("I am " + this.name + " !!!");
           }

       saysHi(){
            console.log("Hi! I am " + this.name);
           }
     };

const privateBarbarian = new PrivateBarbarian('timido');
 privateBarbarian.equipsWeapon({name: 'mace'});
 // => timido grabs a mace from the cavern floor

 console.log(`Barbarian weapons: ${privateBarbarian.weapons}`);
 // => Barbarian weapons: undefined

console.log(privateBarbarian.toString())

