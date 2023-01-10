/**
 * we may have a base Product class and two classes DigitalProduct and PhysicalProduct
 * that share code with the base class. Inheritance solves this problem by allowing
 * classes to inherit methods and properties from a base class.
 */
class Product {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    printDisplayName(): void {
        console.log(`Title: ${this.title}`);
    }
}

class PhysicalProduct extends Product {
    weight: number;

    constructor(title: string, weight: number) {
        super(title); // calls Product constructor

        this.weight = weight;
    }

    printWeight(): void {
        console.log(`Weight: ${this.weight}lb`);
    }
}

class DigitalProduct extends Product {
    platform: Platform;

    constructor(title: string, platform: 'PC' | 'Console') {
        super(title); // calls Product constructor

        this.platform = platform;
    }

    printPlatform(): void {
        console.log(`Platform: ${this.platform}`);
    }
}

