const { DeckManager, Deck } = require('./DeckManager');
const fixtures = require('./fixtures');
const Card = require('./Card');

const AllCards = new DeckManager(fixtures);
const squirtle = new Card('squirtle', 9, 2, 'water');

describe('Deck', () => {

  test('Deck manager should return a card', () => {
    const myDeck = new DeckManager([squirtle]);
    const card = myDeck.getRandomCard();
    expect(card.name).toBe('squirtle');
    expect(card.health).toBe(9);
    expect(card.currentHealth).toBe(9);
    expect(card.strength).toBe(2);
    expect(card.category).toBe('water');
  })

  test('Deck manager should return a random card', () => {
    const randomCard = AllCards.getRandomCard();
    expect(randomCard).toHaveProperty('name');
    expect(randomCard).toHaveProperty('health');
    expect(randomCard.currentHealth).toEqual(randomCard.health);
  })

  test('Deck manager should return a deck of n cards', () => {
    const myDeck = AllCards.getDeck(5);
    expect(myDeck.cards.length).toEqual(5);
    expect(myDeck instanceof Deck).toBeTruthy();
  })

  test('Draw a hand from a deck should return n cards', () => {
    const myDeck = AllCards.getDeck(8);
    const hand = myDeck.drawHand(3);
    expect(myDeck.cards.length).toBe(5);
    expect(hand.length).toBe(3);
  })
})
