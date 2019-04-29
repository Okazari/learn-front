import { CardList, CreateCard } from "./pages";
import VueRouter from "vue-router";

export const routes = [
  {
    path: "/cardList",
    component: CardList,
    label: "Card list"
  },
  {
    path: "/new",
    component: CreateCard,
    label: "Create a card"
  }
];

const router = new VueRouter({
  routes
});

export default router;
