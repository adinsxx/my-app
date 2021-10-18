// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with those)
function BackpackItem(items){
    this.items = items;
}

function Weapon(name, cost){
        this.name = name || 'Default Title';
        this.cost = Math.floor(Math.random() * 10);
}

function Armor (name, cost){
    this.name = name || 'Default Title';
    this.cost = Math.floor(Math.random() * 10);

} 

let weapon = new BackpackItem(new Weapon('+1 Mace'));
let armor = new BackpackItem(new Armor('+1 Helmet'));