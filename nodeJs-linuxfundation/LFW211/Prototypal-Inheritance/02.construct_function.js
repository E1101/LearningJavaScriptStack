// There is variety of options to make object inheritance:
//
// const { inherit } = require('./util/inherit.ecma5.js')
// const inherit = require('./util/inherit.function.js')
const inherit = require('./util/inherit.node.js')

// Using PascalCase for functions which intended to be called
// with new() is convention and recommended.
function Person(name) {
    this.name = name;
}

Person.prototype._sayName = function() {
    console.log('Hello my name is ' + this.name)
}

Person.prototype.talk = function() {
    if (null === this.name) {
        console.log('ababa dd abababa')
        return
    }

    this._sayName()
}

function Employee(name, title) {
    // First argument is set this object reference inside Object,
    // subsequent arguments passed to call() become function arguments.
    Person.call(this, name)

    this.title = title
}

inherit(Employee, Person)
Employee.prototype._sayName = function() {
    if (!this.title) {
        // duplicated code from Person object
        console.log('Hello my name is ' + this.name)
        return;
    }

    console.log(`Hello my name is ${this.name} the ${this.title}`)
}

const pye = new Employee('Pye', 'Westwing developer')
pye.talk()

console.log(Object.getPrototypeOf(pye) === Employee.prototype)
console.log(Object.getPrototypeOf(Employee.prototype) === Person.prototype)
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype)
