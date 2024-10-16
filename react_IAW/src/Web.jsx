import React from 'react'
import {Cabecera1, Cabecera2, Cabecera3, Cabecera4 } from './Cabecera'
import { ListarItems, ListarItems2, ListarTabla } from './Listaritems'

function Web() {
    return(
        <div>
            <div>Adrian Rai Campos Vargas</div>
            <Cabecera1/>
            <Cabecera1/>
            <Cabecera2/>
            <ol>
                <Cabecera3 mensaje="Es REACT" otro="otro texto"/>
                <Cabecera4 mensaje="Es REACT2" otro="otro texto"/>
                <Cabecera4 otro="otro texto"/>
            </ol>
            <p>Listar items de un array con cadenas</p>
            <ListarItems/>
            <p>Listar items de un array con json</p>
            <ListarItems2/>
            <p>Listar los heroes de marvel del fichero heroe.json</p>
            <ListarTabla/>
        </div>
    )
}

export default Web