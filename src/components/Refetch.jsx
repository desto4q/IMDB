import React from "react";

function Refetch({ refech, isError }) {
  if (!isError) {
    return null;
  }
  return (
    <div className="refetch_wrapper">
      <button onClick={refech}>refetch</button>
    </div>
  );
}

export default Refetch;
