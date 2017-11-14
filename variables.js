//Original code   Arthur
//changes by Simen

    //Level
var level = 1;

    //HP and MP
var currentHP;
var maxHP;

var currentMP;
var maxMP;


// An object that represents an empty equipment slot
var empty = {
    name: "empty",
    type: "empty",
    DMG: 0,
    DEF: 0
};


var currentWeapon = empty;
var currentHat = empty;
var currentShirt = empty;
var currentPants = empty;
var currentBoots = empty;


 /*Weapon template, COPY THIS!

var  = {
    name: "",
    type: "",
    DMG:  
};
*/

    //starter weapons

//Human starter weapon
var kitchenKnife = {
    name: "Kitchen Knife",
    type: "knife",
    DMG: 2
};

//Elf starter weapon
var stick = {
    name: "Stick",
    type: "staff",
    DMG: 1
};

//Halfling starter weapon
var oldDagger = {
    name: "Old dagger",
    type: "knife",
    DMG: 3
};

//Orc starting weapon
var woodenClub = {
    name: "Wooden club",
    type: "club",
    DMG: 3
};

    //Other wepaons
var butcherKnife = {
    name: "Buther knife",
    type: "knife",
    DMG: 4
};

var staff = {
    name: "Staff",
    type: "staff",
    DMG: 3
};

var ironDagger = {
    name: "Iron dagger",
    type: "knife",
    DMG: 5
};

var stoneClub = {
    name: "Stoneclub",
    type: "club",
    DMG: 5
};

    //Hats
/*Hat template COPY THIS!

var = {
    name:""
};
*/

var strawHat = {
    name: "Straw Hat"
};

var chainmailHood = {
    name: "Chainmail hood"
};

var leatherHood = {
    name: "Leather hood"
};

    //Shirts

/*Shirt template COPY THIS!

var = {
    name: "",
    type: ""
};

*/
var woolenShirt = {
    name: "Woolen shirt",
    type: "shirt"
};

var chainmailShirt = {
    name: "Chainmail shirt",
    type: "shirt"
};

var clothRobe = {
    name: "Cloth robe",
    type: "robe"
};

var darkLeatherShirt = {
    name: "Dark leather shirt",
    type: "shirt"
};

    //Pants

/* Pants template
var = {
    name: "",
    type ""
};
*/

var woolenPants = {
    name: "Woolen pants",
    type: "pants"
};

var wornLeatherPants = {
    name: "Worn leather pants",
    type: "pants"
};

var darkLeatherPants = {
    name: "Dark leather pants",
    type: "pants"
};

    //Boots

/* Boots template
var = {
    name: "",
    type: ""
};
*/

var leatherBoots = {
    name: "Leather boots",
    type: "boots"
};

var clothBoots = {
    name: "Cloth boots",
    type: "boots"
};


    //Abilities

var selfHeal = {
    name: "Self heal",
    MPCost: 25
};
/*
//Human
var selfHeal =  4 + level;
var selfHealMP = 25;
*/
var fireball = {
    name: "Fireball",
    MPCost: 25
};
/*Elf
var fireball = currentWeapon.DMG + 4 + level;
var fireballMP = 25;
*/
var damageUp = {
    name: "Damage up",
    MPCost: 25
};
/*
//Halfling
var damageUp = currentWeapon.DMG + 1 + level;
var damageUpMP = 25;
*/
var berserk = {
    name: "Berserk",
    MPCost: 25
};
/*
//Orc
var berserk = currentWeapon.DMG * 2 + level;
var berserkMP = 25;
*/
    


    
    //Races
var race;

var human = {
    HPBase: 99,
    MPBase: 99,
    starterWeapon: kitchenKnife,
    starterHat: strawHat,
    starterShirt: woolenShirt,
    starterPants: woolenPants,
    starterBoots: leatherBoots,
    abilities: selfHeal
};

var orc = {
    HPBase: 199,
    MPBase: 49,
    starterWeapon: woodenClub,
    starterHat: chainmailHood,
    starterShirt: chainmailShirt,
    starterPants: wornLeatherPants,
    starterBoots: leatherBoots,
    abilities: berserk
};

var elf = {
    HPBase: 74,
    MPBase: 149,
    starterWeapon: stick,
    starterHat: empty,
    starterShirt: clothRobe,
    starterPants: empty,
    starterBoots: clothBoots,
    abilities: fireball
};

var halfling = {
    HPBase: 99,
    MPBase: 74,
    starterWeapon: oldDagger,
    starterHat: leatherHood,
    starterShirt: darkLeatherShirt,
    starterPants: darkLeatherPants,
    starterBoots: leatherBoots,
    abilities: damageUp
};

