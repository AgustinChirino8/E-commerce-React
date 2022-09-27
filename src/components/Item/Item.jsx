import React from "react";
import { NavLink } from "react-router-dom";

export const Item = ({ info }) => {
  return (
    <div className="Products" >
      <NavLink to='/detalle'>
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
