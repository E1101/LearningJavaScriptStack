class Wolf {
    constructor(name) {
        this.name = name
    }

    // Wolf.prototype.howl = function () { ...
    howl() {
        console.log(this.name + ': awoooooooo')
    }
}

// `extends` ensure that prototype of Dog will be Wolf
class Dog extends Wolf {
    constructor(name) {
        // equivalent of Wolf.call(this, name + ' the dog')
        super(name + ' the dog')
    }

    woof() {
        console.log(this.name + ': woof')
    }
}

const rufus = new Dog('Rufus');
rufus.woof()
rufus.howl()
