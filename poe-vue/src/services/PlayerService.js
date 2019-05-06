import http from "./HTTPService";

const API = "players";

export const getAllPlayers = () => http.get(API);

export const savePlayer = player => http.post(API, player);

export const deletePlayer = id => http.delete(`${API}/${id}`);
