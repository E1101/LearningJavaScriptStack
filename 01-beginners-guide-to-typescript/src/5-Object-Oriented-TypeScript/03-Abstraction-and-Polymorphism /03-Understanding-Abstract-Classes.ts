/**
 * In some cases, we want the combination of an interface and a class:
 * a class that has properties and methods while also ensuring that any
 * extending children implement a set of methods. Abstract classes serve
 * this purpose.
 */
interface Display {
    printDisplayName(): void;
}

abstract class BaseProduct implements Display {
    title: string;
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

    printDisplayName(): void {
        console.log(`Name: ${this.title}`);
    }

    // this method must be implemented by all extending classes
    abstract printPriceAfterTaxes(): void;
}

class ClothingProduct extends BaseProduct {
    private tax = .07;

    constructor(title, price) {
        super(title, price);
    }

    printPriceAfterTaxes(): void {
        console.log(`$${this.price + this.price * this.tax}`);
    }
}

const tshirt = new ClothingProduct('short sleeve tee', 20);

tshirt.printDisplayName(); // Name: short sleeve tee
tshirt.printPriceAfterTaxes(); // $21.04
