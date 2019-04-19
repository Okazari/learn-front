import { createCard } from "./Card";
import { fight } from "./game";

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

// Cheated!
const immortal = {
  name: "dracula",
  health: 42,
  currentHealth: 42,
  strength: 42,
  type: "vampire"
};

describe("Game", () => {
  test("Character with positive currentHealth should be the winner", () => {
    expect(fight(squirtle, pika).winner.name).toBe("pika");
    expect(fight(immortal, pika).winner.name).toBe("dracula");
  });

  test("Character with 0 currentHealth should be the loser", () => {
    expect(fight(squirtle, pika).looser.currentHealth).toBe(0);
    expect(fight(immortal, pika).looser.currentHealth).toBe(0);
  });
});
