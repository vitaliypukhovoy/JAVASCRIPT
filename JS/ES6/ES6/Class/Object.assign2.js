
const canBeIdentifiedByName = {
    toString(){
        return this.name;
    }
};

const canCastSpells = {
    castsSpell(spell, target){
        console.log(this + ' casts ' + spell + ' on ' + target);
        this.mana -= spell.mana;
        spell(target);
    }
};

const canSteal = {
    steals(target, item){
        console.log(`${this} steals ${item} from ${target}`);
    }
};

const canPlayMusic = {
    playsMusic(){
        console.log(`${this} grabs his ${this.instrument} and starts pla\
 ying music`);
    }
};

// and now we can create our objects by composing this behaviors tog\ //ether
function Wizard(element, mana, name, hp){
    const wizard = {element,
        mana,
        name,
        hp};
    Object.assign(wizard,
        canBeIdentifiedByName,
        canCastSpells);
    return wizard;
}

function Thief(name, hp){
    const thief = {name,
        hp};
    Object.assign(thief,
        canBeIdentifiedByName,
        canSteal);
    return thief;
}

function Bard(instrument, mana, name, hp){
    const bard = {instrument,
        mana,
        name,
        hp};
    Object.assign(bard,
        canBeIdentifiedByName,
        canCastSpells,
        canSteal,
        canPlayMusic);
    return bard;
}



const lightningSpell = (target) => {
       console.log(`A bolt of lightning electrifies ` +
                       `${target} (-10hp)`);
       target.hp -= 10;
     };
 lightningSpell.mana = 5;
 lightningSpell.toString = () => 'lightning spell';

 const orc = {
       name: 'orc',
       hp: 100,
       toString(){ return this.name }
 };

 const wizard = Wizard('fire', 100, 'Randalf, the Red', 10);
 wizard.castsSpell(lightningSpell, orc);
