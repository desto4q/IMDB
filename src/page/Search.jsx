import React from "react";
import { useSearchStore } from "../stores/search_store";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { queryIMDB } from "../api/api";
import List from "../components/List";
import Card from "../components/Card";

function Search() {
  const searchTerm = useSearchStore((state) => state.search);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ q: searchTerm });
  }, [searchTerm]);

  const { data: searchResults } = useQuery(
    [searchTerm],
    async () => await queryIMDB({ keyword: searchTerm })
  );

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  let data = searchResults?.results?.map(
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
    <div className="search">
      <div className="container">
        <List title={"search results"} data={data} />
      </div>
    </div>
  );
}

export default Search;
