import React from "react";
import { useQuery } from "react-query";
import { fetch_movies, fetch_series } from "../api/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import List from "../components/List";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Series_card from "../components/Series_card";
import Spinner from "../components/Spinner";

function Tv_series() {
  let { page } = useParams();
  let { data: movie_results } = useQuery(
    ["series_list", page],
    async () => await fetch_series({ page: page })
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
      original_name,
      name,
    }) => {
      return (
        <Series_card
          name={name}
          id={id}
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
        <List title={"Series"} data={data && data} />
      </div>
      {!data ? <Spinner /> : null}
      <Pagination />
    </div>
  );
}

export default Tv_series;
