//==== 90

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
];

myMusic.push({
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
        "CD",
        "8T",
        "LP"
    ],
})

//==== 90

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
];

myMusic.push({
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
        "CD",
        "8T",
        "LP"
    ],
})

//==== 91

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = undefined;
gloveBoxContents =  myStorage.car.inside["glove box"]

//==== 92

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
//==== 93

// Setup
var recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

    if(value === ""){
        delete records[id][prop];
    }
    else if(prop != 'tracks' && value.length !== 0){
        records[id][prop] = value;

    }
    else if ( prop === 'tracks' && records[id] == undefined){
        records[id] = [value]

    }
    else if (prop === 'tracks' && value.length !== 0 ){
        if(records[id][prop] == undefined){
            records[id][prop] = [value]
        } else{
            records[id][prop].push(value)
        }
    }


    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//==== 94
// Setup
var myArray = [];
var i = 5;
while(i >= 0){
    myArray.push(i);
    i--;
}

//==== 95
// Setup
var myArray = [];
for(let i = 1; i <= 5; i++){
    myArray.push(i)
}

//==== 96
// Setup
var myArray = [];
for (var i = 0; i < 10; i += 1) {
    if(i % 2 != 0){
        myArray.push(i);}
}

//==== 97
// Setup
var myArray = [];
// Setup
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

//==== 98
// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for(var i = 0; i < myArr.length; i++){
    total += myArr[i];
}

//==== 99
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(var i=0; i < arr.length; i++){
        for(var j=0; j <arr[i].length; j++){
            product *= arr[i][j];
        }
    }

    // Only change code above this line
    return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

//==== 100
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do{
    myArray.push(i);
    i++;
}while (i < 11)