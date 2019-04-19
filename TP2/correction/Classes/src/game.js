function playTurnBasedBattle(card1, card2) {
  let round = 0;
  let newHealth;
  let attacker;
  let defender;

  while (card1.currentHealth > 0 && card2.currentHealth > 0) {
    attacker = round % 2 === 0 ? card1 : card2;
    defender = round % 2 === 0 ? card2 : card1;
    newHealth = defender.currentHealth - attacker.strength;
    defender.currentHealth = newHealth < 0 ? 0 : newHealth;
    round++;
  }

  return {
    nbOfRounds: round,
    winner: card1.currentHealth > 0 ? card1 : card2,
    loser: card1.currentHealth > 0 ? card2 : card1
  };
}

export default playTurnBasedBattle;
