import React from "react";
import { useQuery } from "react-query";
import {
  fetch_series,
  fetch_similar_series,
  get_episode_number,
  get_series,
} from "../api/api";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import Similar from "../components/Similar";
import Series_card from "../components/Series_card";

function Series() {
  let location = useLocation().pathname;
  let regex = /\d+$/;
  let [season, setSeason] = useState(1);
  let result = regex.exec(location);

  const { data } = useQuery(["movie", result[0]], async () =>
    get_series({ id: result[0] })
  );

  useEffect(() => {
    console.log(data);
  }, [[data]]);

  const { data: episode_list } = useQuery([season, result[0]], async () =>
    get_episode_number({ id: result[0], season: season })
  );

  const { data: similar } = useQuery([result[0]], async () =>
    fetch_similar_series({ id: result[0] })
  );

  useEffect(() => {
    if (similar) {
      console.log(similar);
    }
  }, [similar]);
  let similar_series = similar?.results?.map(
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
    }) => {
      return (
        <Series_card
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

  let epi_title = data?.name.replace(/ /g, "-");
  return (
    <div className="series welcome">
      <div className="info">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt=""
        />
        <div className="details">
          <div className="title_info">
            <h2 className="title">{data?.original_name}</h2>
            <div className="date">
              {data?.first_air_date.toString().slice(0, 4)}
              {!data ? <Spinner /> : null}
            </div>
          </div>

          <div className="runtime">
            <div className="time">{data?.episode_run_time[0]} mins</div>

            <div className="lang">{data?.original_language}</div>
            <div className="status">Status: {data?.status}</div>
            <div className="rating">Rating: {data?.vote_average}</div>
          </div>
          <div className="genres">
            {data?.genres?.map(({ id, name }) => {
              return (
                <div className="genre" key={id}>
                  {name}
                </div>
              );
            })}
          </div>
          <p className="desc">{data?.overview}</p>
          <div className="episode_list">
            <div className="season">
              season:
              {data?.seasons?.map(({ season_number, id }) => {
                if (season == season_number) {
                  return (
                    <div key={id} className="season_active">
                      {season_number}
                    </div>
                  );
                }
                return (
                  <div
                    className="season_btn"
                    key={id}
                    onClick={() => {
                      setSeason(season_number);
                    }}
                  >
                    {season_number}
                  </div>
                );
              })}
            </div>
            <div className="epi_list">
              episodes:
              {episode_list?.episodes?.map(({ id, episode_number }) => {
                return (
                  <Link
                    to={`/watch/${epi_title}-${result[0]}/season/${season}/episode/${episode_number}`}
                    key={id}
                  >
                    {episode_number}
                  </Link>
                );
              })}
              {!episode_list ? <Spinner /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Similar data={similar_series} />
      </div>
    </div>
  );
}

export default Series;
