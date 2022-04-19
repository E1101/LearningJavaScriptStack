const Person = {
    name: null,
    talk: () => {
        if (null === this.name) {
            console.log('ababa dd abababa')
            return
        }

        this._sayName()
    },
    _sayName: () => {
        console.log('Hello my name is ' + this.name)
    }
}

const Employee = Object.create(Person, {
    title: {
        value: null,
    },
    _sayName: {
        value: () => {
            if (! this.title) {
                Person._sayName.call(this)
                return;
            }

            console.log(`Hello my name is ${this.name} the ${this.title}`)
        }
    }
})

function createEmployee(name, title) {
    let empObj = {};
    if (name !== undefined) {
        Object.assign(empObj, {
            name: {
                value: name
            }
        });
    }

    if (title !== undefined) {
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
