import http from "./HTTPService";

const API = "cards";

export const getAllCards = () => http.get(API);

export const saveCard = card => http.post(API, card);

export const deleteCard = id => http.delete(`${API}/${id}`);
