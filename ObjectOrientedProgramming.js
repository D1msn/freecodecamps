//==== 1;
let dog = {
    name: "Aflac",
    numLegs: 2
};

//==== 2;
let dog = {
    name: "Spot",
    numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
// Only change code below this line

//==== 2;
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => `This dog has ${dog.numLegs} legs.`
};

dog.sayLegs();

//==== 3;
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

//==== 4;
function Dog(){
    this.name = "Rex";
    this.color = "black";
    this.numLegs = 4;
}

//==== 5;
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}

let hound = new Dog();

// Only change code below this line

//==== 6;
function Dog(dogName,dogColor) {
    this.name = dogName;
    this.color = dogColor;
    this.numLegs  = 4;

}
let terrier = new Dog("rex", "red");

//==== 7;
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse  = new House(3);
myHouse instanceof House

// Only change code below this line

//==== 8;
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for(let prop in canary ){
    if(canary.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
}

// Only change code below this line

//==== 9;
function Dog(name) {
    this.name = name;
}


Dog.prototype.numLegs = 2;
// Only change code above this line
let beagle = new Dog("Snoopy");

//==== 10;
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];


for (let property in beagle ) {
    if(beagle .hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}
// Only change code below this line

//==== 11;
function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    return candidate.constructor === Dog;
}