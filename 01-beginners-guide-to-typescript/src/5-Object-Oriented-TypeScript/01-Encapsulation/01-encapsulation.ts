/**
 * Encapsulation is about organizing related data and functions into one class.
 * The data is saved in properties while the functions that operate on that data
 * are saved in methods. Access modifiers determine whether a property or method
 * is public, private, or protected.
 */
class FoodItem {
    public label: string; // accessible everywhere
    protected cost: number; // accessible by this class and any extending classes
    private id: number; // accessible only in this class

    constructor(label: string, cost: number) {
        this.label = label;
        this.cost = cost;

        this.id = Math.random();
    }

    printId(): void {
        console.log(this.id);
    }
}

/**
 * And extends:
 */
class Cheese extends FoodItem {
    origin: string; // default modifier is public, so we can omit the 'public' keyword

    constructor(label: string, cost: number, origin: string) {
        // the 'super()' will call the FoodItem constructor to
        // properly initialize the fields inherited from FoodItem
        super(label, cost);

        this.origin = origin;
    }

    print(): void {
        console.log(
            `${this.label} from ${this.origin} costs $${this.cost}`
        );
    }
}

/**
 * Now we use new:
 */
// the "new" keyword is used to create a new Cheese object
const brie = new Cheese('Brie', 8, 'France');

brie.print(); // 'Brie from France costs $8'
brie.printId(); // [random number] (inherited from FoodItem)

console.log(brie.origin); // 'France'
console.log(brie.label); // 'Brie' (inherited from FoodItem)

console.log(brie.cost); // Error: 'cost' is protected
console.log(brie.id); // Error: 'cost' is private
