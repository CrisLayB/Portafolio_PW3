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

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Header.css'

export const HeaderPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: isScrolled ? '#222' : 'rgba(34,34,34,0.85)',
        color: '#fff',
        boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
        zIndex: 1000,
      }}
    >
      <div
        className="navbar-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0.7rem 2rem',
        }}
      >
        <Link
          to="/Portafolio_PW3/"
          className="navbar-brand"
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.7rem',
            letterSpacing: '1px',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '1.7rem', fontWeight: 700 }}>Cristian Laynez</h2>
        </Link>
        <ul
          className="navbar-menu"
          style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link
              to="/Portafolio_PW3/"
              className="navbar-link"
              style={{
                color: location.pathname === '/' ? '#00d8ff' : '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.1rem',
                borderBottom:
                  location.pathname === '/' ? '2px solid #00d8ff' : '2px solid transparent',
                padding: '0.2rem 0',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}
            >
              Home
            </Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link
              to="/Portafolio_PW3/about"
              className="navbar-link"
              style={{
                color: location.pathname === '/about' ? '#00d8ff' : '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.1rem',
                borderBottom:
                  location.pathname === '/about' ? '2px solid #00d8ff' : '2px solid transparent',
                padding: '0.2rem 0',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}
            >
              About
            </Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/games' ? 'active' : ''}`}>
            <Link
              to="/Portafolio_PW3/games"
              className="navbar-link"
              style={{
                color: location.pathname === '/games' ? '#00d8ff' : '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.1rem',
                borderBottom:
                  location.pathname === '/games' ? '2px solid #00d8ff' : '2px solid transparent',
                padding: '0.2rem 0',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}
            >
              Games
            </Link>
          </li>
          {/* <li className={`navbar-item ${location.pathname === '/experience' ? 'active' : ''}`}>
            <Link
              to="/Portafolio_PW3/experience"
              className="navbar-link"
              style={{
                color: location.pathname === '/experience' ? '#00d8ff' : '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.1rem',
                borderBottom:
                  location.pathname === '/experience'
                    ? '2px solid #00d8ff'
                    : '2px solid transparent',
                padding: '0.2rem 0',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}
            >
              Experience
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}
