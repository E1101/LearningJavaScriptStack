const util = require('util');

// Wolf Prototype
// --------------------------
function Wolf(name) {
    this.name = name;
}

Wolf.prototype.howl = function() {
    console.log(this.name + ': Awoooooo');
}

// Dog Prototype
// --------------------------
function Dog(name) {
    // First argument is set this object reference inside Object,
    // subsequent arguments passed to call() become function arguments.
    Wolf.call(this, name + ' the dog');
}

Dog.prototype.woof = function() {
    console.log(this.name + ' : Wooooooof');
}

util.inherits(Dog, Wolf); // <==--- HERE ----<

// Run
const rufus = new Dog('Rufus');
rufus.woof();

console.log(Object.getPrototypeOf(rufus) === Dog.prototype)
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype)
console.log(Object.getPrototypeOf(Wolf.prototype) === Object.prototype)
