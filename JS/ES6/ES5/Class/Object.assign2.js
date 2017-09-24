'use strict';

var canBeIdentifiedByName = {
    toString: function toString() {
        return this.name;
    }
};

var canCastSpells = {
    castsSpell: function castsSpell(spell, target) {
        console.log(this + ' casts ' + spell + ' on ' + target);
        this.mana -= spell.mana;
        spell(target);
    }
};

var canSteal = {
    steals: function steals(target, item) {
        console.log(this + ' steals ' + item + ' from ' + target);
    }
};

var canPlayMusic = {
    playsMusic: function playsMusic() {
        console.log(this + ' grabs his ' + this.instrument + ' and starts pla ying music');
    }
};

// and now we can create our objects by composing this behaviors tog\ //ether
function Wizard(element, mana, name, hp) {
    var wizard = { element: element,
        mana: mana,
        name: name,
        hp: hp };
    Object.assign(wizard, canBeIdentifiedByName, canCastSpells);
    return wizard;
}

function Thief(name, hp) {
    var thief = { name: name,
        hp: hp };
    Object.assign(thief, canBeIdentifiedByName, canSteal);
    return thief;
}

function Bard(instrument, mana, name, hp) {
    var bard = { instrument: instrument,
        mana: mana,
        name: name,
        hp: hp };
    Object.assign(bard, canBeIdentifiedByName, canCastSpells, canSteal, canPlayMusic);
    return bard;
}

var lightningSpell = function lightningSpell(target) {
    console.log('A bolt of lightning electrifies ' + (target + ' (-10hp)'));
    target.hp -= 10;
};
lightningSpell.mana = 5;
lightningSpell.toString = function () {
    return 'lightning spell';
};

var orc = {
    name: 'orc',
    hp: 100,
    toString: function toString() {
        return this.name;
    }
};

var wizard = Wizard('fire', 100, 'Randalf, the Red', 10);
wizard.castsSpell(lightningSpell, orc);