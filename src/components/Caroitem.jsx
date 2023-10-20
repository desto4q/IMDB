import React from "react";
import { Link } from "react-router-dom";

function Caroitem() {
  let img ="https://images3.alphacoders.com/124/1241167.png"
  return (
    <div className="caro_item">
      <div className="caro_img">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h2 className="title">Thor Love and Thunder</h2>
        <div className="info"></div>
        <div className="desc"></div>
        <div className="link">
          <Link>Watch Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Caroitem;
