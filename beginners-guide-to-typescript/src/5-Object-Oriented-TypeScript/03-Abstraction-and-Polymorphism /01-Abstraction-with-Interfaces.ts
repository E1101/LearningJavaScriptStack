/**
 * [ Abstraction with Interfaces ]
 *
 * Abstraction can be explicitly implemented in TypeScript using interfaces,
 * which allow us to declare the public properties and methods that should be
 * implemented by one or more classes.
 */
interface Display {
    printDisplayName(): void;
}

class Product implements Display {
    private title: string;
    private stock: number;

    constructor(title: string, stock: number) {
        this.title = title;
        this.stock = stock;
    }

    printDisplayName(): void {
        console.log(`${this.title} (${this.stock})`);
    }
}

/**
 * Using the Display interface, we can write code that depends on that
 * interface as opposed to a concrete class.
 */
function printMultiple(obj: Display[]): void {
    obj.forEach(obj => obj.printDisplayName());
}

printMultiple([
    new Product('Socks', 2),
    new Product('Toothpaste', 100),
]);

// Socks (2)
// Toothpaste (100)

