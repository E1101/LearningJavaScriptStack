/**
 * In OOP, polymorphism is an object's ability to represent many shapes.
 * In our Product example above, a Product object can represent two shapes:
 * a Product and a Display.
 */

/**
 * Because TypeScript's type system is structural, any object or class can
 * be assigned to a more general type so long as the object/class has the
 * necessary properties.
 * ---
 * This object does not explicitly implement the Display
 * interface, but we can use it in any place that requires
 * Display.
 * */
interface Display {
    printDisplayName(): void;
}

const printObj = {
    printDisplayName() {
        console.log('Coffee (50)')
    },
    randomMethod() {
        return 'random string';
    },
};

function printMultiple(obj: Display[]): void {
    obj.forEach(obj => obj.printDisplayName());
}

printMultiple([
    printObj, // OK
]);
