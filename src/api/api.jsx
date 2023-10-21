import { json } from "react-router-dom";
import { auth } from "./api_keys";

let options = {
  headers: {
    Authorization: `Bearer ${auth}`,
  },
};

let fetch_func = async (url, options) => {
  let data = await fetch(url, options).then((resp) => {
    return resp.json();
  });
  return data;
};

export let fetch_movie = async () => {
  let url =
    "https://api.themoviedb.org/3/movie/11?api_key=646ee4899ba4e1e81bf45f185cbe081e";
  return fetch_func(url, options);
};

export let now_playing = async () => {
  let url = "https://api.themoviedb.org/3/movie/now_playing";
  return fetch_func(url, options);
};


export let popular = async () => {
  let url = "https://api.themoviedb.org/3/movie/popular";
  return fetch_func(url, options);
};

export let queryIMDB = async ({keyword}) => {
  let url = `https://api.themoviedb.org/3/search/multi?query=loki&include_adult=false&language=en-US&page=1`;

  if (keyword) {
  url = `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=en-US&page=1`;
  }
  
  return fetch_func(url, options);
};

