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