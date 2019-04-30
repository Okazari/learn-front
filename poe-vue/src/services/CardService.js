const API = "http://localhost:8081/cards";

const defaultHeaders = new Headers();
defaultHeaders.append("Content-Type", "application/json");

const parseJSON = response => response.json();

export const getAllCards = () => fetch(API).then(parseJSON);

export const saveCard = card =>
  fetch(API, {
    headers: defaultHeaders,
    method: "POST",
    body: JSON.stringify(card)
  }).then(parseJSON);
