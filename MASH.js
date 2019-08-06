const homes = ["Mansion", "Apartment", "Shack", "House", "your parents basment"];
const die = ["fall damage","zombie hoard","skelaton sniping","hunger","withering","drowning","falling into lava","charged creeper",
"a cave spiders poison","angry wolfs","falling gravel","getting near a polar bear cub","fighting a witch","baby zombie","holding the wrong bucket"];
const respect = ["oof","press F to pay respects","ugghhh","Rest in peace","Riposa in pace","Resquieta in Pace",
"May your soul move onto the next realm peacefully","May you have eternal rest"];
function mash(){
    return ("You will make $" + money_made() + ",and you will live in a " + getHome() + ", having " + getChildrenCount() +
     " kid(s), costing you $" + money_lost() + ". Unfortunately you will die of " + how_to_die() + "! " + respects() + ".");
}
console.log (mash());

function getHome(){
    let home = Math.floor(Math.random()* homes.length);
    return homes[home]
}
function getChildrenCount() {
    let children = Math.floor(Math.random()* 101);  
   return (children);
}
function how_to_die(){
    let dies = Math.floor(Math.random()* die.length);
    return die[dies];
}
function money_made(){
    let money = Math.floor(Math.random()* 1000001);
    return (money);
}
function money_lost(){
    let moneys = Math.floor(Math.random()* 100001);
    return (moneys);
}
function respects(){
    let dead = Math.floor(Math.random()* respect.length);
    return respect[dead]
}