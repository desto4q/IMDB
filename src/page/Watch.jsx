import React from "react";
import { useParams } from "react-router-dom";

function Watch() {
  let { seasonid, episodeid, id } = useParams();

  let regex = /\d+$/;
  let result = regex.exec(id);
  console.log(result[0]);

  let movie_details;
  return (
    <div className="video_page welcome ">
      <div className="vid_cont">
        <iframe
          src={`https://vidsrc.to/embed/tv/${result[0]}/${seasonid}/${episodeid}`}
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

export default Watch;
