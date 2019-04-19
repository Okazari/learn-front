import Card from "./Card";

export class DeckManager {
  constructor(fixtures) {
    const cards = [];
    for (const fixture of fixtures) {
      cards.push(
        new Card(
          fixture.name,
          fixture.health,
          fixture.strength,
          fixture.category
        )
      );
    }
    this.cards = cards;
  }

  getRandomIntInclusive(minimum, maximum) {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomCard() {
    const card = this.cards[
      this.getRandomIntInclusive(0, this.cards.length - 1)
    ];
    return {
      name: card.name,
      health: card.health,
      currentHealth: card.currentHealth,
      strength: card.strength,
      category: card.category
    };
  }

  getDeck(nbCards) {
    const cards = [];
    for (let i = 0; i < nbCards; i++) {
      cards.push(this.getRandomCard());
    }
    return new Deck(cards);
  }
}

export class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  drawHand(nbOfCards) {
    if (this.cards.length === 0) {
      throw new Error("Deck is empty!");
    }
    if (this.cards.length < nbOfCards) {
      console.log(`Deck only has ${this.cards.length} cards left!`);
    }
    return this.cards.splice(0, nbOfCards);
  }
}
