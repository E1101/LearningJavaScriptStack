/**
 * Intersections can be used to extend object types, allowing us to
 * create new types that build off of existing ones.
 * ---
 * They are relevant for object types, but not for primitives as a
 * value cannot be multiple primitives at the same time.
 */
type Product = {
    title: string;
    price: number;
};

type Food = {
    calories: number;
    ingredients: string[]
}

type FoodProduct = Food & Product;

// FoodProduct is assignable to objects that have properties from both Food and Product:
const cereal: FoodProduct = {
    title: 'Kellogs',
    price: 5.99,
    calories: 100,
    ingredients: ['wheat', 'sugar'],
}; // OK

const steak: FoodProduct = {
    title: 'T-bone',
    ingredients: ['meat'],
    calories: 300,
}; // Error: missing 'price'

const arugula: FoodProduct = {
    title: 'Organic Arugula',
    price: 10.00,
    calories: 50,
}; // Error: missing 'ingredients'


/**
 * [ Optional Properties are Optional ]
 *
 * If we mark the price and ingredients properties as optional,
 * we no longer get errors in the failing cases above:
 */
type Product1 = {
    title: string;
    price?: number; // optional property
};

type Food1 = {
    calories: number;
    ingredients?: string[] // optional property
}

type FoodProduct1 = Food1 & Product1;

const steak1: FoodProduct1 = {
    title: 'T-bone',
    ingredients: ['meat'],
    calories: 300,
}; // OK

const arugula1: FoodProduct1 = {
    title: 'Organic Arugula',
    price: 10.00,
    calories: 50,
}; // OK

const basil1: FoodProduct1 = {
    title: 'Basil',
    calories: 10,
}; // OK

/**
 * [ Shared Properties are Intersections ]
 *
 * Any properties that are shared in the types being intersected
 * become intersections themselves.
 */
type Product2 = {
    title: string;
    price?: number;
    meta: {
        inStock: number,
    },
};

type Food2 = {
    calories: number;
    ingredients?: string[];
    meta: {
        expirationDate: Date;
    },
}

type FoodProduct2 = Food2 & Product2;

const steak2: FoodProduct2 = {
    title: 'T-bone',
    ingredients: ['meat'],
    calories: 300,
    meta: {
        inStock: 200, // Error: missing 'expirationDate'
    },
};

const burrito2: FoodProduct2 = {
    title: 'Chicken Burrito',
    ingredients: ['chicken', 'tortilla', 'salsa'],
    calories: 300,
    meta: {
        inStock: 200,
        expirationDate: new Date('March 23, 2019'),
    },
}; // OK

