import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import productos from "../../data/products";


export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
    getData.then((res) => setData(res));
  }, []);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };
  return (
    <>
      <div className="bloque"><ItemCount initial={1} stock={5} onAdd={onAdd} /></div>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
