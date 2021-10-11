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

//==== 12;
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

//==== 13;
function Dog(name) {
    this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

//==== 14;
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
// Only change code below this line

//==== 15;
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

//==== 16;
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

//==== 17;
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,

};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

//==== 18
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

//==== 19
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

//==== 20
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();

//==== 21
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof!");
};



// Only change code above this line

let beagle = new Dog();

//==== 22
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = () => "Alas, this is a flightless bird."


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

//==== 23
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

let glideMixin  = function(obj) {
    obj.glide = function() {
        console.log("Glide, wooosh!");
    }
};

glideMixin(bird);
glideMixin(boat)

bird.glide();
boat.glide();
// Only change code below this line

//==== 24
function Bird() {
    let weight = 15;
    this.getWeight = () => weight;
}

//==== 25
(function () {
    console.log("A cozy nest is ready");
})()

//==== 26

let funModule = (function(){
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            }
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            }
        }
    }
})()
