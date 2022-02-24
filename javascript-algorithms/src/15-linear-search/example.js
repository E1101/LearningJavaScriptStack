// Import dependencies.
import linearSearch from './linearSearch';

// Create people objects.
const tim = { name: 'Tim', phone: '+111111111112' };
const jane = { name: 'Jane', phone: '+111111111111' };
const bill = { name: 'Bill', phone: '+111111111113' };
const janeNamesake = { name: 'Jane', phone: '+111111111114' };
const peter = { name: 'Peter', phone: '+111111111115' };

// Add people to the phone book.
const phoneBook = [tim, jane, bill, janeNamesake];

// Create custom comparator function that can compare two person
// and decide whether they are equal or not.
const personComparator = (person1, person2) => {
  return person1.name === person2.name ? 0 : -1;
};

// Let's try to find Jane in the phone book using linear search.
// Notice that we have two persons with the same name Jane in the phone book and
// our comparision function takes only the person name into account so we are
// expecting to have two indices in the output.

// eslint-disable-next-line no-unused-expressions
linearSearch(phoneBook, jane, personComparator); // -> [1, 3]

// Now let's try to find Peter. He is not in the phone book so we expect an empty array.

// eslint-disable-next-line no-unused-expressions
linearSearch(phoneBook, peter, personComparator); // -> []
