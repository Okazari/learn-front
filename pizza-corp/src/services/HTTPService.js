const BASE = "http://localhost:8081/";
const defaultHeaders = new Headers();
defaultHeaders.append("Content-Type", "application/json");

const parseJSON = response => response.json();

export default {
  get: url => fetch(BASE + url).then(parseJSON),
  post: (url, data) =>
    fetch(BASE + url, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(data)
    }).then(parseJSON),
  delete: url => fetch(BASE + url, { method: "DELETE" }).then(parseJSON)
};
