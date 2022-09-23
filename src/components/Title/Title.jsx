import React from "react";

export const Title = ({greeting}) => {
  return (
    <div id="fondo" className="App">
      <h1 style={{ color: "brown", paddingTop: "10px", fontSize: "65px" }}>
        {greeting="Cuurly's Coffee Shop"}
      </h1>
      <h2 style={{ color: "beige", paddingBottom: "25px" }}>
        Cafe de especialidad
      </h2>
      <hr></hr>
    </div>
  );
};

export default Title;
