//==== 101

function sum(arr, n) {
    // Only change code below this line
    if(n===0){
        return 0;
    } else if(n === 1){
        return arr[0]
    } else{
        return sum(arr, n - 1) + arr[n - 1]
    }
    // Only change code above this line
}

//==== 102

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}


lookUpProfile("Akira", "likes");


//==== 103

function randomFraction() {

    // Only change code below this line

    return Math.random();

    // Only change code above this line
}


//==== 104

function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random()* 10);
}

//==== 105

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}

//==== 106

function convertToInteger(str) {
    return parseInt(str)
}

convertToInteger("56");

//==== 107

function convertToInteger(str) {
    return parseInt(str, 2)
}

convertToInteger("10011");

//==== 108

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

//==== 109

function checkSign(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
            : "zero"
}

checkSign(10);

//==== 110

// Only change code below this line
function countdown(n){
    if (n < 1) {
        return [];
    } else {
        var countdownArray = countdown(n - 1);
        countdownArray.unshift(n);
        return countdownArray;
    }

}
// Only change code above this line

//==== 111

// Only change code below this line
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
};