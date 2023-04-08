// Soldier
class Soldier {
    constructor(health, strength){
        this.health= health;
        this.strength= strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name=name;
    }
    receiveDamage(damage){
        this.health-= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health-= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
    this.vikingArmy= [];
    this.saxonArmy= [];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        idSaxon= math.floor(math.random(this.saxonArmy.length));
        idViking= math.floor(math.random(this.vikingArmy.length));
        this.saxonArmy[idSaxon].receiveDamage(this.vikingArmy[idViking].strength);
        if (this.saxonArmy[idSaxon].health==0){
            this.saxonArmy.splice(idSaxon, 1);
        }
    }

    saxonAttack(){
        idSaxon= math.floor(math.random(this.saxonArmy.length));
        idViking= math.floor(math.random(this.vikingArmy.length));
        this.vikingArmy[idViking].receiveDamage(this.saxonArmy[idSaxon].strength);
        if (this.vikingArmy[idViking].health==0){
            this.vikingArmy.splice(idViking, 1);
        }
    }
    showStatus(){
        if(this.saxonArmy==[]){
            return "Vikings have won the war of the century!";
        } else if(this.vikingArmy==[]){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }

}

const war1 =new War()
console.log(war1)