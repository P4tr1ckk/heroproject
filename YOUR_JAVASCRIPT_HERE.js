// Write your JS here

let hero = {
 name: 'Nofaroh',
 heroic: true,
 inventory: [''],
 health: 10,
 weapon: {
   type: '',
   damage: 2
 }
}

function rest(hero) {
 hero.health = 10;
 return hero;
};

weapon = {type:'dagger', damage: 2}

function pickUpItem(hero, weapon) {
 hero.inventory.push(weapon);
 return hero;
};



function equipWeapon(hero) {
 if (hero.inventory.length === 0) {
   return;
 } else {
   hero.weapon = hero.inventory[0];
 }
};
