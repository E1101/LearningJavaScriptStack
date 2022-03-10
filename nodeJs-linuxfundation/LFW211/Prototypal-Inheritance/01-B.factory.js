const Person = {
    name: null,
    talk: function() {
        if (null === this.name) {
            console.log('ababa dd abababa')
            return
        }

        this._sayName()
    },
    _sayName: function() {
        console.log('Hello my name is ' + this.name)
    }
}

const Employee = Object.create(Person, {
    title: {
        value: null,
    },
    _sayName: {
        value: function() {
            if (!this.title) {
                // duplicated code from Person object
                console.log('Hello my name is ' + this.name)
                return;
            }

            console.log(`Hello my name is ${this.name} the ${this.title}`)
        }
    }
})

function createEmployee(name, title) {
    let empObj = {};
    if (name !== undefined || name !== null) {
        Object.assign(empObj, {
            name: {
                value: name
            }
        });
    }

    if (title !== undefined || title !== null) {
        Object.assign(empObj, {
            title: {
                value: title
            }
        });
    }

    return Object.create(Employee, empObj)
}

const pye = createEmployee('Pye', 'Westwing developer')
pye.talk()

console.log(Object.getPrototypeOf(pye) === Employee) //true
console.log(Object.getPrototypeOf(Employee) === Person) //true
