import React from 'react';
import './style.css';
import CartWidget from '../CartWidget/cartWidget';
import Icon from '../../Icons/taza-de-cafe.png'


export const NavBar = () => {
  return (
    <div className='nav-main'>
      <nav className='nav-list'>
        <div className='iconBlock'><img className='icon' src={Icon} alt='icono' ></img></div>
        <ul ><a href="/#"><CartWidget/></a></ul>
        <ul><a href='/#'>Inicio</a></ul>
        <ul><a href='/#'>Productos</a></ul>
        <ul><a href='/#'>Registrarse</a></ul>
      </nav>
    </div>
  )
}
export default NavBar;