import React from 'react'

export function Cabecera1() {
  return (
    <h1>Clase de IAW 2024</h1>
  )
}

export function Cabecera2() {
  return (
    <h2>Segunda Cabecera</h2>
  )
}

export function Cabecera3(props) {
  return (
    <>
      <li>{props.mensaje}</li>
      <li>{props.otro}</li>
    </>
  )
}

export function Cabecera4({mensaje="mensaje123",otro}) {
  return (
    <>
      <li>{mensaje}</li>
      <li>{otro}</li>
    </>
  )
}
