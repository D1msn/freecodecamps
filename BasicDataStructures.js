//==== 1
let yourArray = ["hello", "World", true, 150, 72]; // Change this line

//==== 2
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "Good day"
// Only change code above this line
console.log(myArray);

//==== 3
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('I', 2, 'three')
    arr.push(7, 'VIII', 9)
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

//==== 4
function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

//==== 5
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4);
// Only change code above this line
console.log(arr);

//==== 6
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//==== 7
function forecast(arr) {
    // Only change code below this line
    return arr.slice(2,4);
}
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//==== 8
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr])
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

//==== 9
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
}

console.log(spreadOut());

//==== 10
function quickCheck(arr, elem) {
    // Only change code below this line
    return arr.indexOf(elem) >= 0 ? true : false;
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//==== 11
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++){
        if(arr[i].indexOf(elem) === -1){
            newArr.push(arr[i]);
        }
    }

    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//==== 12
let myNestedArray = [
    // Only change code below this line
    ['unshift', ['loop', ['concat', "deeper", true, ['concat', false, true, 'spread', 'deepest'], 'array'], 6, 7, 1000, 'method',"deep"], 1, 2, 3, 'complex', 'nested'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
];

//==== 13
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);

//==== 13
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

//==== 14
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    // Only change code below this line
    if(foods[scannedItem] != undefined){
        return foods[scannedItem];
    }  // Only change code above this line
}

console.log(checkInventory("apples"));

