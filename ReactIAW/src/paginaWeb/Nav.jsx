import React from 'react'
import style from './nav.module.css'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <Link to="/gen1" className={style.contenidonav}>Gen1</Link> 
        <Link to="/gen2" className={style.contenidonav}>Gen2</Link>
        <Link to="/gen3" className={style.contenidonav}>Gen3</Link>
        <Link to="/digimons" className={style.contenidonav}>Digimons</Link>
        <Link to="/contactos" className={style.contenidonav}>Contactos</Link>
    </nav>
  )
}

export default Nav