import { Link } from 'react-router-dom'

import './css/Header.css'

const HeaderPortfolio = () => {
  return (
    <>
      <nav className="header">
        <Link to={'/'}>
          {' '}
          <h1 className="header-main">
            <b>Cristian Laynez</b>
          </h1>
        </Link>

        <ul className="header-right">
          <Link to={'/about'}>
            {' '}
            <h1 className="header-about">
              <b>Más sobre mí</b>
            </h1>
          </Link>
        </ul>
      </nav>
      <hr className="bar-gray"></hr>
    </>
  )
}

export default HeaderPortfolio
