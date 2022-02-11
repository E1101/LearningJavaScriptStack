// Import dependencies.
import bwPowerSet from './bwPowerSet';

// Set up ingredients.
const ingredients = ['banana', 'orange', 'apple'];

// Generate all possible salad mixes out of our ingredients.
const saladMixes = bwPowerSet(ingredients);

// eslint-disable-next-line no-console
console.log(saladMixes);

/*
  The output will be:

  [
    [],
    ['banana'],
    ['orange'],
    ['banana', 'orange'],
    ['apple'],
    ['banana', 'apple'],
    ['orange', 'apple'],
    ['banana', 'orange', 'apple'],
  ]
 */
