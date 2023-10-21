import React from "react";
import Carousel from "../components/Carousel";
import List from "../components/List";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { now_playing, popular } from "../api/api";
import { useEffect } from "react";

function WelcomePage() {
  
  let { data: current } = useQuery(["data"], now_playing);

  useEffect(() => {
    console.log(current);
  }, [current]);

  let data = current?.results?.map(
    ({
      id,
      release_date,
      vote_average,
      original_language,
      title,
      poster_path,
    }) => {
      return <Card key={id} img={poster_path} title={title}  release={release_date} lang={original_language} vote={vote_average}/>;
    }
  );

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
