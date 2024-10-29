import React from 'react'
import style from './nav.module.css'
import { IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <Link to="/" className={style.contenidonav}>Inicio</Link> 
        <Link to="/producto" className={style.contenidonav}>Noticias</Link> 
        <Link to="/about" className={style.contenidonav}><IoIosContact />Contacto</Link> 
    </nav>
  )
}

export default Nav