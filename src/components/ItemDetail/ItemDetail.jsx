import React from "react";
import "./ItemDetail.css";

export const ItemDetail = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="bloque">
        <h4>{data.name}</h4>
        <div className="detailimage">
          <img src={data.image} alt="cafe" />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
