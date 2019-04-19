import Card from "./Card";
import playTurnBasedBattle from "./game";

const squirtle = new Card("squirtle", 9, 2, "water");
const pika = new Card("pika", 8, 3, "electric");

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
    expect(playTurnBasedBattle(squirtle, pika).winner.name).toBe("pika");
    expect(playTurnBasedBattle(immortal, pika).winner.name).toBe("dracula");
  });

  test("Character with 0 currentHealth should be the loser", () => {
    expect(playTurnBasedBattle(squirtle, pika).loser.currentHealth).toBe(0);
    expect(playTurnBasedBattle(immortal, pika).loser.currentHealth).toBe(0);
  });
});
