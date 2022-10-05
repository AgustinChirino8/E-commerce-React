import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import productos from "../../data/products.js";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    getData.then((res) => setData(res));
  }, []);
  const result = productos.filter((productos) => productos.id == id);

  return <ItemDetail key={data} detail={result} />;
};

export default ItemDetailContainer;
