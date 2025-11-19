import React from "react";

function Titile({ raqam, children }) {
  console.log(children);
  return <div><h1>Bu title componenti</h1>{children}</div>;
}

export default Titile;
