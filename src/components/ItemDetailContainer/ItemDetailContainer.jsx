import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../data/products";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);
  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
