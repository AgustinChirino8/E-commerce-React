import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import productos from "../../data/products";
import { useParams } from "react-router-dom";



export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const {Products} = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    if (Products) {
      getData.then((res) => setData(res.filter(productos => productos.name === Products)));
    }else{
      getData.then((res) => setData(res));
    }
  }, [Products]);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };
  return (
    <>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
