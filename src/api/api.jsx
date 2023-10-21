import { json } from "react-router-dom";
import { auth } from "./api_keys";



// headers get your api key from tmdb and put it create api_keys file and dont push that to github

let options = {
  headers: {
    Authorization: `Bearer ${auth}`,
  },
};


// simple fetch func , dont wanna type await this and that too many times
let fetch_func = async (url, options) => {
  let data = await fetch(url, options).then((resp) => {
    return resp.json();
  });
  return data;
};



//forgotten what is using this
export let now_playing = async () => {
  let url = "https://api.themoviedb.org/3/movie/now_playing";
  return fetch_func(url, options);
};



// carousel // slider api route
export let popular = async () => {
  let url = "https://api.themoviedb.org/3/movie/popular";
  return fetch_func(url, options);
};



// search page api route
export let queryIMDB = async ({keyword}) => {
  let url = `https://api.themoviedb.org/3/search/multi?query=loki&include_adult=false&language=en-US&page=1`;

  if (keyword) {
  url = `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=en-US&page=1`;
  }
  
  return fetch_func(url, options);
};







// movie page api route
export let fetch_movies = ({page}) => {
  
  let url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  if (page) {
    url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`
  }
  return fetch_func(url, options);
} 