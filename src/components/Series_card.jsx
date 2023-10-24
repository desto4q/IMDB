import React from "react";
import { Link } from "react-router-dom";

function Series_card({ img, title, release, lang, vote, alt, type, orig,id }) {

  if (type && type == "person")  {
    return (
      null
    )
  } 


  let link_t = alt ? alt[0]?.title: title ? title: orig
  title = link_t?.replace(/\s+/g, "-")
  let link_path = `/series/${title}-${id}`
  if (type == "tv") {
    link_path = `/series/${title}-${id}`
  }
  
  return (
    <Link className="card" to={link_path}>
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w500/${
          alt ? alt[0]?.poster_path : img
        }`}
        alt=""
      />
      <div className="movie_title">
        {alt ? alt[0]?.title : title ? title : orig && orig}
      </div>
      <div className="movie_info">
        <div>{release && release && release.slice(0, 4)}</div>
        <div>{alt ? alt[0]?.vote_average : vote}</div>
        <div className="lang">{alt ? alt[0]?.original_language : lang}</div>
        <div className="type">{type && type}</div>
      </div>
    </Link>
  );
}

export default Series_card;
 