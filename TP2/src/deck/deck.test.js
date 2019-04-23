import { createRandomDeck } from "./deck";
import { createCard } from "../card";

const cardList = [...Array(70)].map((_, index) =>
  createCard({ name: `Bla${index}` })
);

describe("Deck test suite", () => {
  it("should create random deck", () => {
    expect(createRandomDeck(cardList, 2).length).toBe(2);
  });

  it("should throw if asking for more card than possible", () => {
    expect(() => createRandomDeck(cardList, 75)).toThrow();
  });
});
