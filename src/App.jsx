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

import { Route, Routes } from 'react-router-dom'

import './css/App.css'
import './css/Styles.css'

import { ScrollButton, HeaderPortfolio } from './components/'
import { About, Games, Portfolio } from './pages'

const App = () => {
  return (
    <Routes>
      <Route
        path="/Portafolio_PW3/"
        element={
          <>
            <HeaderPortfolio />
            <Portfolio />
            <ScrollButton />
          </>
        }
      ></Route>
      <Route
        path="/Portafolio_PW3/about"
        element={
          <>
            <HeaderPortfolio />
            <About />
            <ScrollButton />
          </>
        }
      ></Route>
      <Route
        path="/Portafolio_PW3/games"
        element={
          <>
            <HeaderPortfolio />
            <Games />
            <ScrollButton />
          </>
        }
      ></Route>
      {/* <Route
        path="/Portafolio_PW3/experience"
        element={
          <>
            <HeaderPortfolio />
            <Experience />
            <ScrollButton />
          </>
        }
      ></Route> */}
    </Routes>
  )
}

export default App
