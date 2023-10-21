import React from "react";
import Carousel from "../components/Carousel";
import List from "../components/List";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { fetch_movie, popular, top_rated } from "../api/api";
import { useEffect } from "react";

function WelcomePage() {
  let arr = Array(20).fill("ss");

  let data = arr.map((item, key) => {
    return <Card key={key} />;
  });
  let { data: movie } = useQuery(["data"], popular);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div className="welcome">
      <div className="hero">
        <div className="content">
          <div className="img_cont">
            <Carousel />
          </div>
        </div>
      </div>
      <div className="container">
        <List title={"lastest movies"} data={data} />
      </div>
    </div>
  );
}

export default WelcomePage;
