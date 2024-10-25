import React from 'react'
import style from './nav.module.css'

import { IoIosContact } from "react-icons/io";
function Nav() {
  return (
    <nav>
        <a href="#" className={style.contenidonav}>Inicio</a> 
        <a href="#" className={style.contenidonav}>Noticias</a> 
        <a href="#" className={style.contenidonav}><IoIosContact />Contacto</a> 
    </nav>
  )
}

export default Nav