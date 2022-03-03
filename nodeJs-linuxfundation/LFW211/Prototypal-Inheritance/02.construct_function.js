// In EcmaScript5+ the Object.create() could be used
// to the same effect.
function inherit(proto) {
    // Using PascalCase for functions which intended to be called
    // with new() is convention and recommended.
    function ChainLink() {}
    ChainLink.prototype = proto;

    return new ChainLink();
}

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

// Using PascalCase for functions which intended to be called
// with new() is convention and recommended.
function Dog(name) {
    // First argument is set this object reference inside Object,
    // subsequent argements passed to call() become function arguements.
    Wolf.call(this, name + ' the dog');
}

// Dog prototype is explicity assigned, overwritting
// preexisting prototype.
// now Dog.prototype has Wolf.prototype
Dog.prototype = inherit(Wolf.prototype);
Dog.prototype.woof = function() {
    console.log(this.name + ' : Wooooooof');
}

// Run
const rufus = new Dog('Rufus');
rufus.woof();
rufus.howl();

console.log(Object.getPrototypeOf(rufus) === Dog.prototype)
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype)
console.log(Object.getPrototypeOf(Wolf.prototype) === Object.prototype)
