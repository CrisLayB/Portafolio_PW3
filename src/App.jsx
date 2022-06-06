// Referencias para esquemas para el portafolio
// Para algunas animaciones
// + https://youtu.be/c79C_S0E4IQ
// Para maquetado y algunas funciones
// + https://youtu.be/esC2k9z7w2U
// + https://youtu.be/w8NSgfHfLug

// import { useState } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import logo from './icons/logo.svg'

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
