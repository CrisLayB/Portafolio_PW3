/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! App : App principal para la aplicación de React.
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     2-Junio-2022
 */

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './css/App.css'
import './css/Styles.css'

import HeaderPortfolio from './HeaderPortafolio'
import Portfolio from './Portfolio'
import About from './About'

import ScrollButton from './components/scrollButto/ScrollButton.jsx'

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeaderPortfolio />
            <Portfolio />
            <ScrollButton />
          </>
        }
      ></Route>
      <Route
        path="/about"
        element={
          <>
            <HeaderPortfolio />
            <About />
            <ScrollButton />
          </>
        }
      ></Route>
    </Routes>
  )
}

export default App
