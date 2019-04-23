import { createCard } from "./card";

describe("Card creation test suite", () => {
  it("should create a card with currentHealth", () => {
    const testCard = {
      name: "bla",
      health: 5,
      strength: 4,
      description: "bla"
    };
    const expectedCard = {
      ...testCard,
      currentHealth: 5
    };
    expect(createCard(testCard)).toEqual(expectedCard);
  });
});

// describe("Card fight test !", () = {
//   it('should return the winne', () => {

//   })
// })
