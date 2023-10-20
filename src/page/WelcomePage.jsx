import React from "react";
import Carousel from "../components/Carousel";

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
    </div>
  );
}

export default WelcomePage;
