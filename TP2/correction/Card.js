class Card {
  constructor(name, health, strength, category) {
    this.name = name;
    this.health = health;
    this.currentHealth = this.health; // Health counter during fight
    this.strength = strength;
    this.category = category;
  }

  get name() {
    return this._name;
  }

  get health() {
    return this._health;
  }

  get currentHealth() {
    return this._currentHealth;
  }

  get strength() {
    return this._strength;
  }

  get category() {
    return this._category;
  }

  set name(name) {
    if (typeof name === 'string' || name instanceof String && name.length > 0) {
      this._name = name.toLowerCase()
    } else {
      throw new Error('Name must be a string and cannot be empty.')
    }
  }

  set health(health) {
    if (Number.isSafeInteger(health) && health > 0 && health <= 10) {
      this._health = health;
    } else {
      throw new Error('Health must be a strictly positive integer. Max value is 10.');
    }
  }

  set currentHealth(health) {
    if (Number.isSafeInteger(health) && health >= 0 && health <= 10) {
      this._currentHealth = health;
    } else {
      throw new Error('Current health must be a positive integer. Max value is 10.');
    }
  }

  set strength(strength) {
    if (Number.isSafeInteger(strength) && strength > 0 && strength <= 10) {
      this._strength = strength;
    } else {
      throw new Error('Strength must be a strictly positive integer. Max value is 10.');
    }
  }
  
  set category(category) {
    const categories = new Set(['electric', 'fire', 'warrior', 'water', 'wizard']);
    if (typeof category === 'string' || category instanceof String && category.length > 0) {
      if (categories.has(category.toLowerCase())) {
        this._category = category;
      } else {
        throw new Error('Category must be one of the following values: ' + categories)
      }
    } else {
      throw new Error('Category must be a string.');
    }
  }

}

module.exports = Card;

