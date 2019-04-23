export const createCard = card => {
  return {
    ...card,
    currentHealth: card.health
  };
};

export const fight = (card1, card2) => {};
