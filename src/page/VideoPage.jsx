import React from "react";
import { useLocation } from "react-router-dom";

function VideoPage() {
  let location = useLocation().pathname;
  let regex = /\d+$/;

  let result = regex.exec(location);
  console.log(result);
  //   if (result) {
  //     le number = result[0];
  //     console.log(number);
  //   } else {
  //     console.log("Number not found at the end of the string.");
  //   }

  return (
    <div className="video_page welcome ">
      <div className="vid_cont">
        <iframe
          src={`https://vidsrc.to/embed/movie/${result[0] && result[0]}`}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPage;
