import React from "react";
import { useQuery } from "react-query";
import { fetch_movies, fetch_new_movies } from "../api/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import List from "../components/List";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

function Now_Playing() {
    
  let { page } = useParams();
  let { data:movie_results } = useQuery(
    ["recent_movies", page],
    async () => await fetch_new_movies({ page: page })
  );

  let data = movie_results?.results?.map(
    ({
      id,
      release_date,
      vote_average,
      original_language,
      title,
      poster_path,
      known_for,
      media_type,
      original_name
    }) => {
      return (
        <Card
        orig={original_name}
        type={media_type}
          alt={known_for}
          key={id}
          img={poster_path}
          title={title}
          release={release_date}
          lang={original_language}
          vote={vote_average}
        />
      );
    }
  );

  return (
    <div className="movie head_room welcome">
      <div className="container">
        <List title={"Recent"} data={data &&data}/>
      </div>
      <Pagination/>
    </div>
  );
}

export default Now_Playing;
