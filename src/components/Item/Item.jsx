import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";




export const Item = ({ info }) => {
  const nombre = useContext(CartContext);
  console.log('Item', nombre);
  return (
    <div className="Products" >
      <NavLink to={`/detalle/${info.id}`}>
        <img
          style={{ width: "30%"}}
          src={info.image}
          alt=""
        />
        <h3>{info.name}</h3>
      </NavLink>
    </div>
  );
};

export default Item;
