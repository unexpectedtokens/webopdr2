import React from "react";

const info = props => {
  return (
    <div>
      <h3 style={{ color: "#d23d3dc2" }}>{props.title}</h3>
      <p>{props.children}</p>
    </div>
  );
};
export default info;
