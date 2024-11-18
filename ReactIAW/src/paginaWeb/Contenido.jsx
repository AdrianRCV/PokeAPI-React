import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Section from './Section'
import style from './contenido.module.css'
import { Pokemon, Pokemon2, Pokemon3 } from './Pokemon'
import { Digimon } from './Digimons'
import {RandomAvatar} from './Contactos'

function Contenido() {
  return (
    <div>
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path='/gen1' element={<Gen1 />} />
            <Route exact path='/gen2' element={<Gen2 />} />
            <Route exact path='/gen3' element={<Gen3 />} />
            <Route exact path='/digimons' element={<Digimons />} />
            <Route path="/contactos" element={<Contacto />}>
              <Route path="usuario1" element={<Usuario usuario="Usuario1" />} />
              <Route path="usuario2" element={<Usuario usuario="Usuario2" />} />
              <Route path="usuario3" element={<Usuario usuario="Usuario3" />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default Contenido;

function Home() {
  return <h2 style={{height:"28vh"}}>Elige una generación</h2>;
}

function Gen1() {
  return <Pokemon />;
}

function Gen2() {
  return <Pokemon2 />;
}

function Gen3() {
  return <Pokemon3 />;
}

function Digimons() {
  return <Digimon />;
}

function Contacto() {
  return (
    <main>
      <aside>
        <h1>Contactos</h1>
        <ul>
          <li><a href="/contactos/usuario1">Usuario 1</a></li>
          <li><a href="/contactos/usuario2">Usuario 2</a></li>
          <li><a href="/contactos/usuario3">Usuario 3</a></li>
        </ul>
      </aside>
      <section>
          <Outlet />
      </section>
    </main>
  );
}

function Usuario({usuario}) {
  return (
    <div>
      <RandomAvatar/>
      <h2>{usuario}</h2>
      <p>{usuario}@correo.com</p>
    </div>
  );
}

function NotFound() {
  return <h2>ESTA RUTA NO ES VÁLIDA</h2>;
}
