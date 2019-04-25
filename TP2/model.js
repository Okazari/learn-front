// var toto = 1;
// toto = "toto";

// let toto = 1;
// const toto = 1;
// toto = 2;

// function toto(titi) {
//   return titi;
// }

// const toto = function(titi) {
//   return titi;
// };

// const toto = titi => titi + 1;

// const callback1 = function(callback) {
//   return callback(1);
// };

// callback1(a => console.log(a + 3));

// const array = [1, 2, 3, 4];

// const array2 = array.filter(e => e > 2);

const card = {
  name: "POE",
  strength: 4,
  health: 5,
  description: "this is a card"
};

// destructuring;
// const {
//   health,
//   strength,
//   obj: { toto }
// } = card;

// const health = card.health;
// const strength = card.strength;
// const toto = card.obj.toto;

// console.log(card);

// const suicide = card => {
//   const { name, health, strength, description } = card;
//   return {
//     strength,
//     health: health - strength,
//     name,
//     // name: name,
//     description
//   };
// };

// const suicide = card => {
//   const { health, strength } = card;
//   return {
//     //spread operator
//     ...card,
//     health: health - strength
//   };
// };

// const card2 = suicide(card);
// const card3 = suicide(card);

// console.log("card", card);
// console.log("card2", card2, card3);

// const array = [1, 2, 3, 4];

// const push = (array, element) => {
//   return [...array, element];
// };

// console.log(array, push(array, 5));

// let a = 1;
// if (true) {
//   let b = 2;
//   console.log(a);
// }

// console.log(b);

// for (let a = 0; a < 5; a++) {
//   setTimeout(() => console.log(a), 1000);
// }

// const createCard = (name, health) => {
//   return {
//     name,
//     health
//   };
// };

// card.name;

// new Card(name, health);

// card.name;

// class Card {
//   constructor(name, health) {
//     this.name = name;
//     this.health = health;
//   }

//   looseHealth() {
//     this.health--;
//   }
// }

//Card.js

// class Card {}

// const createCard = () => {};
// export const cardList = [new Card()];
// export default Card;

// //toto.js
// import Card, { cardList } from "Card";

// new Card();
