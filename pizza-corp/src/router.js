import { PizzaList, CreatePizza } from "./pages";
import VueRouter from "vue-router";

export const routes = [
  {
    path: "/pizza",
    component: PizzaList,
    label: "Mes pizzas"
  },
  {
    path: "/new",
    component: CreatePizza,
    label: "Créer une pizza"
  }
];

const router = new VueRouter({
  routes
});

export default router;
