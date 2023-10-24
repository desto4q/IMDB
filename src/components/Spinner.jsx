import React from "react";
import { InfinitySpin, ThreeCircles } from "react-loader-spinner";

function Spinner() {
  let color = "hsla(34, 100%, 59%, 1)";
  return (
    <ThreeCircles
      height={"100%"}
      width={"100%"}
      wrapperClass="spinner"
      color={color}
    />
  );
}

export default Spinner;
