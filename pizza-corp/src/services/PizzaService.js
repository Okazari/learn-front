import http from "./HTTPService";

const API = "pizzas";

export const getAllPizzas = () => http.get(API);

export const savePizza = pizza => http.post(API, pizza);

export const deletePizza = id => http.delete(`${API}/${id}`);
