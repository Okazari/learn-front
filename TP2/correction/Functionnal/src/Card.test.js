import { createCard } from "./Card";

const squirtle = createCard({
  name: "squirtle",
  health: 9,
  strength: 2,
  category: "water"
});

const pika = createCard({
  name: "pika",
  health: 8,
  strength: 3,
  category: "electric"
});

describe("Card validation", () => {
  test("Numeric health should be a value between 0 and 10.", () => {
    expect(squirtle.health).toBe(9);
    expect(pika.health).toBe(8);
  });
});
