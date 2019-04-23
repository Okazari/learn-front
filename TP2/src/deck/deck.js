export const createRandomDeck = (cardList, nbCards) => {
  if (nbCards > cardList.length)
    throw new Error("Cannot ask for more card than possible");
  return cardList
    .sort(() => (Math.floor(Math.random() * 100) % 3) - 1)
    .splice(0, nbCards);
};
