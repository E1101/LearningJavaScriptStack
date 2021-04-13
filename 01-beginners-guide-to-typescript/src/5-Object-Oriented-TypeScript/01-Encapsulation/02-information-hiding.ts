/**
 * Information hiding is the idea that we should only expose methods
 * and properties that do not reveal implementation details of the class.
 * --
 * the logic for reading and manipulating the data is owned by and centralized
 * in the class itself, which will help with maintainability in the long run.
 */
class Product {
    private title: string; // private property
    private stock: number; // private property

    constructor(title: string, stock: number) {
        this.title = title;
        this.stock = stock;
    }

    printDisplayName(): string { // public method
        return `${this.title} (${this.stock})`;
    }
}
