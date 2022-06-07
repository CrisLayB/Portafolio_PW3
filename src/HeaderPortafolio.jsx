/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! Header Portafolio: Encabezado Principal
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     2-Junio-2022
 */

import { Link } from 'react-router-dom'

import './css/Header.css'

const HeaderPortfolio = () => {
  return (
    <>
      <nav className="header">
        <div className="link-header-main">
          <Link to={'/'}>
            {' '}
            <h1 className="header-main">
              <b>Cristian Laynez</b>
            </h1>
          </Link>
        </div>

        <ul className="header-right">
          <div className="link-header-about">
            <Link to={'/about'}>
              {' '}
              <h1 className="header-about">
                <b>Más sobre mí</b>
              </h1>
            </Link>
          </div>
        </ul>
      </nav>
      <hr className="bar-gray"></hr>
    </>
  )
}

export default HeaderPortfolio
