import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


export const ItemDetail = ({ data }) => {
  return (
    <div className="bloque">
      <h2>{data.name}</h2>
      <p>{data.id}</p>
    </div>
  );
};

export default ItemDetail;