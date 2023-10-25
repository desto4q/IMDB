import React from "react";
import { useSearchStore } from "../stores/search_store";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { queryIMDB } from "../api/api";
import List from "../components/List";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import Refetch from "../components/Refetch";
function Search() {
  const searchTerm = useSearchStore((state) => state.search);
  const [searchParams, setSearchParams] = useSearchParams();

  const { page } = useParams();
  useEffect(() => {
    setSearchParams({ q: searchTerm });
  }, [searchTerm]);

  const {
    data: searchResults,
    isError,
    refetch,
  } = useQuery(
    [searchTerm, page],
    async () => await queryIMDB({ keyword: searchTerm, page: page })
  );

  useEffect(()=>{
    console.log(searchResults)
  },[searchResults])

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
      original_name,
      name,
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
          name={name}
        />
      );
    }
  );

  return (
    <div className="search">
      <div className="container">
        <List title={"search results"} data={data} />
      </div>

      {!data ? (
        <div className="spin">
          {" "}
          <Spinner />{" "}
        </div>
      ) : null}
      <Refetch isError={isError} refech={refetch} />
      <div className="pagin">
        <Pagination />
      </div>
    </div>
  );
}

export default Search;
