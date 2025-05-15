import { API_BASE_URL } from "./config.js";

fetch(`${API_BASE_URL}/`)
  .then(response => response.text())
  .then(data => console.log(data));
