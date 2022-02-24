/**
 * we can solve the OmniProduct problem by defining the
 * OmniProduct class as a composition of our three behavior classes
 */
class DisplayNamePrinter {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printName(): void {
        console.log(`Name: ${this.name}`);
    }
}

class WeightPrinter {
    weight: number;

    constructor(weight: number) {
        this.weight = weight;
    }

    printWeight(): void {
        console.log(`Weight: ${this.weight}lb`);
    }
}

class PlatformPrinter {
    platform: Platform;

    constructor(platform: 'PC' | 'Console') {
        this.platform = platform;
    }

    printPlatform(): void {
        console.log(`Platform: ${this.platform}`);
    }
}

class OmniProduct {
    private weightPrinter: WeightPrinter;
    private namePrinter: DisplayNamePrinter;
    private platformPrinter: PlatformPrinter;

    constructor(
        title: string,
        weight: number,
        platform: 'PC' | 'Console',
    ) {
        this.namePrinter = new DisplayNamePrinter(title);
        this.weightPrinter = new WeightPrinter(weight);
        this.platformPrinter = new PlatformPrinter(platform);
    }

    printDisplayName() {
        this.namePrinter.printName();
    }

    printWeight() {
        this.weightPrinter.printWeight();
    }

    printPlatform() {
        this.platformPrinter.printPlatform();
    }
}
