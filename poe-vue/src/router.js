import { CardList, CreateCard, PlayerList, CreatePlayer } from "./pages";
import VueRouter from "vue-router";

export const routes = [
  {
    path: "/cardList",
    component: CardList,
    label: "Card list"
  },
  {
    path: "/newCard",
    component: CreateCard,
    label: "Create a card"
  },
  {
    path: "/playerList",
    component: PlayerList,
    label: "Player list"
  },
  {
    path: "/newPlayer",
    component: CreatePlayer,
    label: "Create a player"
  }
];

const router = new VueRouter({
  routes
});

export default router;
