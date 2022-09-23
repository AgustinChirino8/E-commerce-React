import './ItemCount.css'
import React, { useState } from 'react'

export const ItemCount = ({initial ,stock , onAdd}) => {
    const [count , setCount] = useState(initial);
    const decrease = () =>{
        setCount (count - 1);
    }
    const augment = () =>{
        setCount (count + 1);
    }
  return (
    <div className="boton">
        <div className="boton1">
            <button style={{fontSize:"50px" , padding:"15px"}}  disabled={count <= 1} onClick={decrease}>-</button>
            <span style={{fontSize:"60px" , padding:"15px", color:"brown"}}>{count}</span>
            <button style={{fontSize:"50px" , padding:"15px"}} disabled={count >= stock} onClick={augment}>+</button>
        </div>
        <div>
            <button style={{fontSize:"20px" , padding:"15px"}} disabled={stock <= 0} onClick={() => onAdd(count)}>agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount;