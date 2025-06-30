/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 3 - Portafolio Personal
 *
 * ! Header Portafolio: Encabezado Principal ENHANCED
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     2-Junio-2022 (Enhanced 2025)
 */

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Header.css'
import { scrollToTop } from '../../utils/scroll'

export const HeaderPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Get current page for active state
  const getCurrentPage = () => {
    const path = location.pathname
    if (path === '/Portafolio_PW3/' || path === '/') return 'home'
    if (path === '/Portafolio_PW3/about') return 'about'
    if (path === '/Portafolio_PW3/games') return 'games'
    return ''
  }

  const currentPage = getCurrentPage()

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest('.mobile-menu-btn') &&
        !event.target.closest('.mobile-menu')
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  const handleClick = () => {
    scrollToTop({ smooth: false, delay: 0 })
  }

  return (
    <nav className={`navbar-enhanced ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container-enhanced">
        {/* Brand Logo - Left */}
        <Link to="/Portafolio_PW3/" className="navbar-brand-enhanced" onClick={handleClick}>
          <span className="brand-text">Cristian Laynez</span>
          <div className="brand-underline"></div>
        </Link>

        {/* Desktop Menu - Right */}
        <ul className="navbar-menu-enhanced">
          <li className="navbar-item-enhanced">
            <Link
              to="/Portafolio_PW3/"
              className={`navbar-link-enhanced home-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={handleClick}
            >
              <span className="link-text">Home</span>
              <div className="link-background"></div>
              <div className="neon-border">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </li>
          <li className="navbar-item-enhanced">
            <Link
              to="/Portafolio_PW3/about"
              className={`navbar-link-enhanced about-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={handleClick}
            >
              <span className="link-text">About</span>
              <div className="link-background"></div>
              <div className="neon-border">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </li>
          <li className="navbar-item-enhanced">
            <Link
              to="/Portafolio_PW3/games"
              className={`navbar-link-enhanced games-link ${currentPage === 'games' ? 'active' : ''}`}
              onClick={handleClick}
            >
              <span className="link-text">Games</span>
              <div className="link-background"></div>
              <div className="neon-border">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button - Right */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link
            to="/Portafolio_PW3/"
            className={`mobile-link home-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => {
              setIsMobileMenuOpen(false)
              handleClick()
            }}
          >
            <span className="mobile-link-icon">🏠</span>
            Home
          </Link>
          <Link
            to="/Portafolio_PW3/about"
            className={`mobile-link about-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => {
              setIsMobileMenuOpen(false)
              handleClick()
            }}
          >
            <span className="mobile-link-icon">👤</span>
            About
          </Link>
          <Link
            to="/Portafolio_PW3/games"
            className={`mobile-link games-link ${currentPage === 'games' ? 'active' : ''}`}
            onClick={() => {
              setIsMobileMenuOpen(false)
              handleClick()
            }}
          >
            <span className="mobile-link-icon">🎮</span>
            Games
          </Link>
        </div>
      </div>
    </nav>
  )
}
