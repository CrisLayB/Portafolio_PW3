/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! Main: Componenete principal
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     2-Junio-2022
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
