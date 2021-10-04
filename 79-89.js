//==== 79
// Setup
function abTest(a, b) {
    // Only change code below this line
    if(a < 0 || b < 0) return undefined
    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

//==== 80
// Setup
function abTest(a, b) {
    // Only change code below this line
    if(a < 0 || b < 0) return undefined
    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

//==== 81
var count = 0;

function cc(card) {
    // Only change code below this line
    if ( card >= 2 && card <= 6){
        count++;
    } else if ( card >= 7 && card <= 9){
        count = count + 0;
    } else if ( card === 10 || card === "J" || card === "Q" || card === "K" || card === "A"){
        count--;
    }
    if(count > 0){
        return count + " Bet"
    } else{
        return count + " Hold"
    }
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//==== 82
var myDog = {
// Only change code below this line
    name: "Vasya",
    legs: 4,
    tails: 5,
    friends: ["Yes"]

// Only change code above this line
};

//==== 83
// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

//==== 84
// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line