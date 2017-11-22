//Tekstbasert spill


//Creates the inventory in midContent when used
function inventory(){
    var buttonId;
    inventoryText = "<b>Inventory!</b>";
    for(x = 0; x <= inventoryList.length - 1; x++){

        if(inventoryList[x].name === "Empty"){
            console.log("Tihi, easteregg <3")
        }
        else if(inventoryList[x].name === undefined){
            console.log("Tihi, easteregg <3")
        }
        else{

            inventoryText += "<p>" + inventoryList[x].name + "</p> " + "<button" + " onclick=\"inventoryRemove(" + x + ")\"" + ">Delete item</button>";
            buttonId = "removeItem" + x;

        }

    }
    midContent.innerHTML = inventoryText;

};

//Removes an item from the inventory
function inventoryRemove(number){
    // var number = parseInt(removeItem.value);
    //console.log(removeItem.value);
    inventoryList.splice(number,1);
    inventory();
}

//Adds an item to the inventory
function inventoryAdd(i){
    if (i != empty && i != undefined){
        inventoryList.push(i);
    }
};


window.onload = function gameOn(){




    //Name
    var navn = prompt("Choose your charactername");
    for(var x = 1; x != 0; x++){
        if(navn === ""){
            alert("Please choose a name!");
            navn = prompt("Choose your charactername");
        }
        else if(navn === undefined){
            alert("Please choose a name!");
            navn = prompt("Choose your charactername");
        }
        else{
            break;
        }
    }




    //Sex
    var kjønnsTest = prompt("Choose between Male and Female");
    for(var x = 1; x != 0; x++){
        if(kjønnsTest === undefined){
            alert("Please choose a sex!");
            kjønnsTest = prompt("Choose between male and female");
        }
        else{
            break;
        }
    }
    var kjønn = kjønnsTest.toLowerCase();
    for(var x = 1; x != 0; x++){
        if(kjønn != "male" && kjønn != "female"){
            alert("Please choose a valid sex...");
            kjønnsTest = prompt("Choose between male and female");
            kjønn = kjønnsTest.toLowerCase();
        }
        else{
            break;
        }
    }



    //Race
    var raseTest = prompt("Choose between: Human, Elf, Orc or Halfling");
    for(var x = 1; x != 0; x++){
        if(raseTest === undefined){
            alert("Please choose a valid race!");
            raseTest = prompt("Choose between: Human, Elf, Orc or Halfling");
        }
        else{
            break;
        }
    }

    var rase = raseTest.toLowerCase();
    for(var x = 1; x != 0; x++){
        if(rase === "human" || rase === "elf" || rase === "orc" || rase === "halfling"){
            break;
        }
        else{
            alert("Please choose a valid race!");
            raseTest = prompt("Choose between: Human, Elf, Orc or Halfling");
            rase = raseTest.toLowerCase();
        }
    }




    //Biggify first letter
    function førsteBokstavStor(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }    

    //start the game
    alert("You have chosen: \"" + navn +"\" as your name, " + "\"" + førsteBokstavStor(kjønn) + "\" as your gender and \"" + førsteBokstavStor(rase) + "\" as your race! Now let the adventure begin!");


    //figures out your race 
    if(rase === "human"){
        race = human;

    }
    else if(rase === "orc"){
        race = orc;
    }
    else if(rase === "elf"){
        race = elf;

    }
    else if(rase === "halfling"){
        race = halfling;

    }
    else {
        alert("This is never supposed to happen. What did you do?")
    }

    //Sets starter equipment based on race
    currentWeapon = race.starterWeapon;
    currentHat = race.starterHat;
    currentShirt = race.starterShirt;
    currentPants = race.starterPants;
    currentBoots = race.starterBoots;

    inventoryAdd(currentWeapon);
    inventoryAdd(currentHat);
    inventoryAdd(currentShirt);
    inventoryAdd(currentPants);
    inventoryAdd(currentBoots);


    //Sets HP and MP based on race
    maxHP = race.HPBase + level;
    maxMP = race.MPBase + level;
    currentHP = maxHP;
    currentMP = maxMP;

    //Displays name, sex and race
    Navn.innerHTML = "Name: " + navn + " | ";
    Kjønn.innerHTML = "Sex: " + førsteBokstavStor(kjønn) + " | ";
    Rase.innerHTML = "Race: " + førsteBokstavStor(rase);

    //Displays equipment
    equipment.innerHTML =  
        "<b>Equipment</b>" + 
        "<p>" + currentHat.name + "</p>" + 
        "<p>" + currentShirt.name + "</p>" + 
        "<p>" + currentWeapon.name + "/dmg: " + currentWeapon.DMG + "</p>" + 
        "<p>" + currentPants.name + "</p>" + 
        "<p>" + currentBoots.name +"</p>";
    abilities.innerHTML = 
        "<b>Abilities</b>" +
        "<p>" + race.abilities.name + "</p>" +
        "<p> MPcost: " + race.abilities.MPCost + "</p>";

    //Displays HP and MP
    HP.innerHTML = "HP: " + currentHP + "/" + maxHP + " | ";
    MP.innerHTML = "MP: " + currentMP + "/" + maxMP;

    // Actions for the centre of the screen
    midContent.innerHTML = "<button id=\"openInventory\">Inventory</button>";

    openInventory.addEventListener("click", inventory);

}  