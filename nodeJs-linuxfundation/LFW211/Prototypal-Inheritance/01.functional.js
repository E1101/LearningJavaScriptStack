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
                return
            }

            console.log(`Hello my name is ${this.name} the ${this.title}`)
        }
    }
})

const pye = Object.create(Employee, {
    // In addition to `value`, `get` and `set` can be used
    // to create a property getter/setter.
    name: {
        value: 'Pye'
    },
    title: {
        value: 'Senior Software Engineer'
    }
})

pye.talk()

console.log(
    Object.getOwnPropertyDescriptor(pye, 'title')
)
