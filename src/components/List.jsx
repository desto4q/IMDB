import React from "react";

function List({ data, title }) {
  return (
    <div className="list">
      <div className="title">
        {title && title}
      </div>
      <div className="content">{data && data}</div>
    </div>
  );
}

export default List;
