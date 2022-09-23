import React from "react";

export const Item = ({ info }) => {
  return (
    <div className="Products" >
      <a href="/#">
        <img
          style={{ width: "30%"}}
          src={info.image}
          alt=""
        />
        <h3>{info.name}</h3>
      </a>
    </div>
  );
};

export default Item;
