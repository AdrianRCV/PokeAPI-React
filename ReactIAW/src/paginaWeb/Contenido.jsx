import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import Section from './Section'
import './contenido.module.css'
import { Pokemon, Pokemon2, Pokemon3 } from './Pokemon'
import { Digimon } from './Digimons'

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
              <Route path="usuario" element={<Usuario />} />
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
  return <h2>Elige una generación</h2>;
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
    <div>
      <h1>Contacto</h1>
      <Outlet />
    </div>
  );
}

function Usuario() {
  return <h2>Ruta de Usuario bajo Contacto</h2>;
}

function NotFound() {
  return <h2>ESTA RUTA NO ES VÁLIDA</h2>;
}
