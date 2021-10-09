//==== 1

function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

convertToF(30);

//==== 2
function reverseString(str) {
    let arr = str.split("")
    arr.reverse();
    let result = arr.join("")
    return result;
}

reverseString("hello");

//==== 3
function factorialize(num) {
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}

factorialize(5);;

//==== 4
function findLongestWordLength(str) {
    let line = str.split(" ")
    let maxLength = 0;
    line.forEach((item, index) => {
        if(item.length > maxLength){
            maxLength = item.length;
        }
    })
    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//==== 5
function largestOfFour(arr) {
    let results = [];

    for(let i = 0; i < arr.length; i++){
        let max = arr[i][0];
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] > max){
                max = arr[i][j];
            }
        }
        results[i] = max;
    }


    return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//==== 5
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

//==== 6
function repeatStringNumTimes(str, num) {
    let result = ''
    if(num < 0){
        return ''
    } else{
        let i = 0;
        while(i < num){
            result += str;
            i++
        }
    }
    console.log(result)
    return result
}

repeatStringNumTimes("abc", 3);

//==== 7
function truncateString(str, num) {
    if(str.length > num){
        let line = str.slice(-str.length, num) + "...";
        console.log(line)
        return line;
    } else{
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//==== 8
function findElement(arr, func) {
    let num = 0;
    num = arr.find(func)
    return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//==== 9
function booWho(bool) {
    return typeof bool === "boolean";
}

booWho(true);

//==== 10
function titleCase(str) {
    let arrStr = str.toLowerCase().split(" ");
    let result = arrStr.map(item => item[0].toUpperCase()+item.substring(1))
    let resStr = result.join(' ')
    return resStr;
}

titleCase("I'm a little tea pot");

//==== 11
function frankenSplice(arr1, arr2, n) {
    let a = arr2.slice();
    a.splice(n,0,...arr1);
    return a;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);