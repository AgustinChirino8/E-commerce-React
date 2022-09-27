import React from "react";
import "./ItemDetail.css";

export const ItemDetail = ({ data }) => {
  return (
    <div className="bloque">
      <img className="detailImage" src={data.image} alt="cafe" />
      <h2>{data.name}</h2>
      <h3>{data.detail}</h3>
    </div>
  );
};

export default ItemDetail;
