import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import productos from "../../data/products";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { Products } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    // getData.then((res) => setData(res))
    if (Products) {
      getData.then((res) =>
        setData(res.filter((productos) => productos.name === Products))
      );
     } else {
      getData.then((res) => setData(res));
     }

  }, []);

  return (
    <>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
