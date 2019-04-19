import { createCard } from "./Card";
import cardsData from "../data/cards";

export const allCard = cardsData.map(c => createCard(c));

const getRandomIntInclusive = (minimum, maximum) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomCard = cards =>
  cards[getRandomIntInclusive(0, cards.length - 1)];

export const createRandomDeck = (cards, nbCards) =>
  [...Array(nbCards)].map(() => getRandomCard(cards));

export const drawHand = (cards, nbCards) => {
  if (cards.length === 0) {
    throw new Error("deck is empty!");
  }
  if (cards.length < nbCards) {
    console.log(`Deck only has ${cards.length} cards left!`);
  }
  return cards.splice(0, nbCards);
};
