import {
  createDeck,
  getRandomCard,
  allCard,
  createRandomDeck,
  drawHand
} from "./Deck";
import { createCard } from "./Card";

const squirtle = createCard({
  name: "squirtle",
  health: 9,
  strength: 2,
  category: "water"
});

describe("Deck", () => {
  test("Deck manager should return a card", () => {
    const card = getRandomCard([squirtle]);
    expect(card.name).toBe("squirtle");
    expect(card.health).toBe(9);
    expect(card.currentHealth).toBe(9);
    expect(card.strength).toBe(2);
    expect(card.category).toBe("water");
  });

  test("Deck manager should return a random card", () => {
    const randomCard = getRandomCard(allCard);
    expect(randomCard).toHaveProperty("name");
    expect(randomCard).toHaveProperty("health");
    expect(randomCard.currentHealth).toEqual(randomCard.health);
  });

  test("Deck manager should return a deck of n cards", () => {
    const myDeck = createRandomDeck(allCard, 5);
    expect(myDeck.length).toEqual(5);
  });
});
