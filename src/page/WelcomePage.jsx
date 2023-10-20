import React from "react";
import Carousel from "../components/Carousel";
import List from "../components/List";

function WelcomePage() {
  return (
    <div className="welcome">
      <div className="hero">
        <div className="content">
          <div className="img_cont">
            <Carousel />
          </div>
        </div>
      </div>

      <List/>
    </div>
  );
}

export default WelcomePage;
