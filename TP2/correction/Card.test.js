const Card = require('./Card');

const squirtle = new Card('squirtle', 9, 2, 'water');
const pika = new Card('pika', 8, 3, 'electric');

describe('Card validation', () => {
  test('Numeric health should be a value between 0 and 10.', () => {
    expect(squirtle.health).toBe(9);
    expect(pika.health).toBe(8);
  });
})

