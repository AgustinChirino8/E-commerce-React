import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import productos from "../../data/products";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const {id} = useParams()
  const [data, setData] = useState({});
  useEffect(() => {
    setData(productos.filter(prod => prod.id == id))
  }, [])
  return(productos.map(data => <ItemDetail key={data.id} data={data} />));
};

export default ItemDetailContainer;
