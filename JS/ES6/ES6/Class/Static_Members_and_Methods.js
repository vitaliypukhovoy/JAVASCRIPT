class Sword {
    constructor(material, damage, weight){
             this.material = material;
             this.damage = damage;
             this.weight = weight;
           }

       toString(){
             return `${this.material} sword (+${this.damage})`;
           }


       // new static method
       static getRandom(){
             const randomMaterial = 'iron',
                     damage = Math.random(Math.random()*10),
                     randomWeight = '5 stones';
             return new Sword(randomMaterial, damage, randomWeight);
           }

    static getRandom2(){
           // super complex randomness algorithm
          // to pick a material :) cheater!
          const randomMaterial = Sword.materials[0],
                   damage = Math.random(Math.random()*10),
                   randomWeight = '5 stones';

           return new Sword(randomMaterial, damage, randomWeight);
         }

}



console.log(Sword.getRandom());

Sword.materials = ['wood', 'iron', 'steel'];

console.log(Sword.materials);
 // => ['wood', 'iron', 'steel']
console.log(Sword.getRandom2());