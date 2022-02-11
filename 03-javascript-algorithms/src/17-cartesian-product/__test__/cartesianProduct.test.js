import cartesianProduct from '../cartesianProduct';

describe('cartesianProduct', () => {
  it('should return null if there is not enough info for calculation', () => {
    const product1 = cartesianProduct([1], null);
    const product2 = cartesianProduct([], null);

    expect(product1).toBeNull();
    expect(product2).toBeNull();
  });

  it('should calculate the product of two sets', () => {
    const product1 = cartesianProduct([1], [1]);
    const product2 = cartesianProduct([1, 2], [3, 5]);

    expect(product1).toEqual([[1, 1]]);
    expect(product2).toEqual([[1, 3], [1, 5], [2, 3], [2, 5]]);
  });

  it('should make sure that example is working', () => {
    const cardRanks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
    const cardSuits = ['♠', '♣', '♥', '♦'];

    // Generate a deck of cards.
    const cardDeck = cartesianProduct(cardRanks, cardSuits);

    expect(cardDeck.length).toBe(52);
    expect(cardDeck[0]).toEqual(['A', '♠']);
    expect(cardDeck[1]).toEqual(['A', '♣']);
    expect(cardDeck[51]).toEqual(['2', '♦']);
  });
});
