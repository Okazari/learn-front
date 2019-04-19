const createFight = (card1, card2) => ({
  round: 0,
  attacker: card1,
  defender: card2
});

const processRound = ({ round, attacker, defender }) => {
  const newHealth = defender.currentHealth - attacker.strength;
  return {
    round: round + 1,
    attacker: {
      ...defender,
      currentHealth: newHealth > 0 ? newHealth : 0
    },
    defender: attacker
  };
};

export const fight = (card1, card2) => {
  let fight = createFight(card1, card2);
  while (fight.attacker.currentHealth > 0) {
    fight = processRound(fight);
  }
  return {
    nbRounds: fight.round,
    winner: fight.defender,
    looser: fight.attacker
  };
};
