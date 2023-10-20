import React from "react";
import { Link } from "react-router-dom";

function Caroitem({num}) {
  let img = "https://images3.alphacoders.com/124/1241167.png";
  return (
    <div className="caro_item">
      <div className="caro_img">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h2 className="title">Thor Love and Thunder</h2>
        <div className="info">
          <div className="quality">
            hd
          </div>
          <p className="release">2023</p>
          .
          <div className="time">97 mins</div>
        </div>
        <p className="desc">
          Thor's retirement is interrupted by a galactic killer known as Gorr
          the God Butcher, who seeks the extinction of the gods. To combat the
          threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend
          Jane Foster, who - to Thor's surprise - inexplicably wields his
          magical hammer, Mjolnir, as the Mighty Thor.
        </p>
        <div className="links">
          <Link to={"/sas"} className="watch">Watch Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Caroitem;
