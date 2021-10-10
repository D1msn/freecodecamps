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