const wolf = {
    howl: function () {
        console.log(this.name + ': awoooooooo');
    }
}

const dog = Object.create(
    wolf,
    // Properties Descriptor Object,
    // can describe characteristics of the properties on main object
    {
       woof: {
           value: function () {
               console.log(this.name + ': woof');
           }
       }
    }
);

const rufus = Object.create(dog, {
   name: {
       // In addition to `value`, `get` and `set` can be used
       // to create a property getter/setter.
       value: 'Rufus the Dog',
   }
});

rufus.woof();
rufus.howl();

console.log(Object.getOwnPropertyDescriptor(rufus, 'name'));
