import React,{useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ detail }) => {
  const [goToCart , setGoToCart] = useState(false)
  const nombredetalle = detail.map((detail) => detail.name);
  const descripcion = detail.map((detail) => detail.detail);
  const img = detail.map((detail) => detail.image);

  const onAdd = (quantity) => {
    setGoToCart(true);
  };

  return (
    <>
      <div className="bloque">
        <img className="itemDetailImg" src={img} alt="imagen" />
        <div>
          <h1>{nombredetalle}</h1>
          <p>{descripcion}</p>
        </div>
      </div>
      <div className="bloque">
        {
          goToCart
          ? <Link style={{fontSize:'85px'}} to={'/cart'}>terminar compra</Link>
          : <ItemCount initial={1} stock={5} onAdd={onAdd} />
        }
      </div>
    </>
  );
};

export default ItemDetail;
