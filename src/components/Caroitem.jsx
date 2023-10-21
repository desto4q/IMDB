import React from "react";
import { Link } from "react-router-dom";

function Caroitem({ num, img, title, desc, date, rating }) {
  // let img = "https://images3.alphacoders.com/124/1241167.png";
  return (
    <div className="caro_item">
      <div className="caro_img">
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w1280/${img}`}
          alt=""
        />
      </div>
      <div className="details">
        <h2 className="title">{title && title}</h2>

        <div className="info">
          <div className="quality">hd</div>
          <p className="release">{date && date}</p>.
          <div className="time">{rating && rating}</div>
        </div>

        <p className="desc">{desc && desc}</p>

        <div className="links">
          <Link to={"/sas"} className="watch">
            Watch Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Caroitem;
