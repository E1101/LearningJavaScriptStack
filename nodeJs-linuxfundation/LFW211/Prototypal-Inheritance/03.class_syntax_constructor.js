class Person {
    constructor(name) {
        this.name = name
    }

    talk() {
        if (null === this.name) {
            console.log('ababa dd abababa')
            return
        }

        this._sayName()
    }

    _sayName() {
        console.log('Hello my name is ' + this.name)
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title
    }

    _sayName() {
        if (! this.title) {
            super._sayName();
            return;
        }

        console.log(`Hello my name is ${this.name} the ${this.title}`)
    }
}

const pye = new Employee('Pye')
pye.talk()

console.log(Object.getPrototypeOf(pye) === Employee.prototype)
console.log(Object.getPrototypeOf(Employee.prototype) === Person.prototype)
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype)
