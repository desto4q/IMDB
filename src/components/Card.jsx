import React from "react";
import { Link } from "react-router-dom";

function Card({ img, title, release, lang, vote, alt, type, orig }) {
  return (
    <Link className="card">
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w500/${
          alt ? alt[0].poster_path : img
        }`}
        alt=""
      />
      <div className="movie_title">
        {alt ? alt[0].title : title ? title : orig && orig}
      </div>
      <div className="movie_info">
        <div>{release && release.slice(0, 4)}</div>
        <div>{alt ? alt[0].vote_average : vote}</div>
        <div className="lang">{alt ? alt[0].original_language : lang}</div>
        <div className="type">{type && type}</div>
      </div>
    </Link>
  );
}

export default Card;
