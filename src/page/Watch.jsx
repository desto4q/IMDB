import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { get_episode_number, get_series } from "../api/api";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

function Watch() {
  let { seasonid, episodeid, id } = useParams();
  let [season, setSeason] = useState(seasonid);

  let regex = /\d+$/;
  let result = regex.exec(id);

  const { data: movie_details } = useQuery([result[0]], async () =>
    get_series({ id: result[0] })
  );

  const { data: episode_list } = useQuery([season, result[0]], async () =>
    get_episode_number({ id: result[0], season: season })
  );
  //   useEffect(() => {
  //     console.log(episode_list);
  //   }, [episode_list]);

  let epi_title = id;
  return (
    <div className="video_page watch welcome ">
      <div className="vid_cont">
        <iframe
          src={`https://vidsrc.to/embed/tv/${result[0]}/${seasonid}/${episodeid}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="details">
        <div className="movie_title">
          {movie_details?.name}

          <div className="release">
            {movie_details?.release_date?.slice(0, 4)}
          </div>
        </div>
        <div className="genre">
          {movie_details?.genres?.map(({ name }) => {
            return (
              <div className="tag" key={name}>
                {name} .
              </div>
            );
          })}

          <div className="lang">{movie_details?.original_language}</div>
        </div>
        <div className="rating">{movie_details?.vote_average}</div>
        <div className="desc">{movie_details?.overview}</div>
        <div className="episode_list">
          <div className="season">
            season:
            {movie_details?.seasons?.map(({ season_number, id }) => {
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
                  to={`/watch/${epi_title}/season/${season}/episode/${episode_number}`}
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
  );
}

export default Watch;
