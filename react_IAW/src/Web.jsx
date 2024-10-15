import React from 'react'
import {Cabecera1, Cabecera2, Cabecera3, Cabecera4 } from './Cabecera'

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
        </div>
    )
}

export default Web