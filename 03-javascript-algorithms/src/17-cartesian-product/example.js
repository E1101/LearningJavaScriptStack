// Import dependencies.
import cartesianProduct from './cartesianProduct';

// Init the sets of card ranks and suits.
const cardRanks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const cardSuits = ['♠', '♣', '♥', '♦'];

// Generate a deck of cards.
const cardDeck = cartesianProduct(cardRanks, cardSuits);

// Check the deck.
// eslint-disable-next-line no-console
console.log(cardDeck); // -> [['A', '♠'], ['A', '♣'], ..., ['2', '♦']]
