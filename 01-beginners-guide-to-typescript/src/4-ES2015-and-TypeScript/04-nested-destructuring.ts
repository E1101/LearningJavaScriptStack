/**
 * [ Nested Destructuring ]
 */
const laptops = [
    {
        year: 2018,
        os: 'OSX',
        sellerZipCodes: ['10010', '07302'],
    },
    {
        year: 2015,
        os: 'Ubuntu',
        sellerZipCodes: ['07030'],
    },
];

// If we want to extract the second zip code of the
// first laptop, we would do the following:
const [
    {
        sellerZipCodes: [, secondZipCode],
    },
] = laptops;
console.log(secondZipCode); // '07302'

// nested property that do not exist at runtime will throw an error:
const {
    topLevelProp: {
        nestedProp,
    },
} = {}; // Error -- tried to deconstruct nestedProp from undefined


