import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { get_movie_details } from "../api/api";
import { useEffect } from "react";

function VideoPage() {
  let location = useLocation().pathname;
  let regex = /\d+$/;

  let result = regex.exec(location);
  const { data: movie_details } = useQuery([result[0]], () =>
    get_movie_details({ id: result[0] })
  );

  useEffect(() => {
    console.log(movie_details);
  }, [movie_details]);
  return (
    <div className="video_page welcome ">
      <div className="vid_cont">
        <iframe
          src={`https://vidsrc.to/embed/movie/${result[0] && result[0]}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="details">
        <div className="movie_title">
          {movie_details?.title}
          
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
      </div>
    </div>
  );
}

export default VideoPage;
