import http from "./HTTPService";

const API = "ingredients";

export const getAllIngredients = () => http.get(API);
