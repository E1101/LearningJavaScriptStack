class User {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    printUserInfo() {
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
}

const katie = new User('Katherine', 16);

katie.name; // Error: name is private property

katie.getName(); // Katherine
katie.getAge();  // 16
