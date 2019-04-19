export const createCard = ({ name, health, strength, category }) => ({
  name,
  health,
  currentHealth: health,
  strength,
  category
});
