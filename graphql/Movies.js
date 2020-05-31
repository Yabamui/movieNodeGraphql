import fetch from "node-fetch";
const API_URL =
  "https://yts.mx/api/v2/list_movies.json?sort_by=rating&order_by=desc";

export const getMovies = () =>
  fetch(API_URL)
    .then((res) => res.json())
    .then((resJson) => resJson.data.movies);
