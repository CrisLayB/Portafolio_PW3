// Updated Games.jsx component with adaptive filter section and scroll functionality

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Contact } from '../components'
import { enhancedGamesData, backgroundImages, gameStats } from '../data/games-data' // Updated import

// Import your CSS file
import '../css/GamesPage.css'
import '../css/Itchio.css'

export const Games = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const [selectedFilter, setSelectedFilter] = useState('all')

  // Auto-rotate background images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // 🚀 ENHANCED FILTER HANDLER WITH SCROLL TO GAMES SECTION
  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter)

    // Optional: Scroll to games section after filter change
    setTimeout(() => {
      const gamesSection = document.getElementById('games-grid-section')
      if (gamesSection) {
        const navHeight = 120 // Adjust based on your nav height
        const targetPosition = gamesSection.offsetTop - navHeight

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        })
      }
    }, 100)
  }

  // 🚀 SCROLL LINK COMPONENT FOR NAVIGATION WITH SCROLL TO TOP
  const ScrollLink = ({ to, children, className, ...props }) => {
    const handleClick = () => {
      // Scroll to top when navigating to game details
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }, 200)
    }

    return (
      <Link to={to} className={className} onClick={handleClick} {...props}>
        {children}
      </Link>
    )
  }

  // Filter games based on selection - using enhancedGamesData now
  const filteredGames =
    selectedFilter === 'all'
      ? enhancedGamesData
      : selectedFilter === 'featured'
        ? enhancedGamesData.filter((game) => game.featured)
        : enhancedGamesData.filter((game) => game.status.toLowerCase() === selectedFilter)

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'in development':
        return '#ffa500'
      case 'released':
        return '#4caf50'
      case 'completed':
        return '#2196f3'
      case 'prototype':
        return '#9c27b0'
      case 'paused':
        return 'red'
      default:
        return '#666'
    }
  }

  // Enhanced grid class based on number of games
  const getGridClass = () => {
    const gameCount = filteredGames.length
    if (gameCount === 0) return 'games-grid empty'
    if (gameCount === 1) return 'games-grid single'
    if (gameCount === 2) return 'games-grid double'
    if (gameCount === 3) return 'games-grid triple'
    if (gameCount === 4) return 'games-grid quad'
    if (gameCount <= 6) return 'games-grid medium'
    return 'games-grid large'
  }

  // Enhanced section class for dynamic height calculation
  const getSectionClass = () => {
    const gameCount = filteredGames.length
    if (gameCount === 0) return 'games-grid-section empty'
    if (gameCount === 1) return 'games-grid-section single-game'
    if (gameCount === 2) return 'games-grid-section double-games'
    if (gameCount === 3) return 'games-grid-section triple-games'
    if (gameCount === 4) return 'games-grid-section quad-games'
    if (gameCount <= 6) return 'games-grid-section medium-games'
    return 'games-grid-section large-games'
  }

  // Calculate approximate rows for better height estimation
  const getEstimatedRows = () => {
    const gameCount = filteredGames.length
    // This will be used by CSS for dynamic height calculation
    return Math.ceil(gameCount / 3) // Assuming 3 columns on desktop
  }

  return (
    <div className="App">
      <div className="page-scroll">
        {/* Hero Section with Background Carousel */}
        <section className="games-hero">
          <div className="games-bg-carousel">
            {backgroundImages.map((img, index) => (
              <div
                key={index}
                className={`bg-slide ${index === currentBgIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
            <div className="bg-overlay"></div>
          </div>

          <div className="games-hero-content">
            <h1 className="games-hero-title">Game Development</h1>
            <p className="games-hero-description">
              My specialty is video game development and I{`'`}ve had the opportunity to create
              <span className="highlight"> hackathons</span>,{' '}
              <span className="highlight">personal projects</span>,
              <span className="highlight"> university projects</span>, and even as part of a
              <span className="highlight"> startup studio</span>. I{`'`}m always open to new
              <span className="highlight"> collaborations</span> and exciting game development
              challenges.
            </p>
            <div className="games-stats">
              <div className="stat">
                <span className="stat-number">{gameStats.totalGames}+</span>
                <span className="stat-label">Games Created</span>
              </div>
              <div className="stat">
                <span className="stat-number">{gameStats.yearsExperience}+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">{gameStats.studiosCreated}</span>
                <span className="stat-label">Studio Founded</span>
              </div>
            </div>
          </div>
        </section>

        {/* 🚀 ENHANCED FILTER SECTION WITH ADAPTIVE HEIGHT */}
        <section className="games-filter" data-button-count="5">
          <div className="filter-container">
            <h2>Explore My Games</h2>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterChange('all')}
              >
                All Games ({enhancedGamesData.length})
              </button>
              <button
                className={`filter-btn ${selectedFilter === 'featured' ? 'active' : ''}`}
                onClick={() => handleFilterChange('featured')}
              >
                Featured ({enhancedGamesData.filter((game) => game.featured).length})
              </button>
              <button
                className={`filter-btn ${selectedFilter === 'in development' ? 'active' : ''}`}
                onClick={() => handleFilterChange('in development')}
              >
                In Development (
                {
                  enhancedGamesData.filter((game) => game.status.toLowerCase() === 'in development')
                    .length
                }
                )
              </button>
              <button
                className={`filter-btn ${selectedFilter === 'released' ? 'active' : ''}`}
                onClick={() => handleFilterChange('released')}
              >
                Released (
                {
                  enhancedGamesData.filter((game) => game.status.toLowerCase() === 'released')
                    .length
                }
                )
              </button>
              <button
                className={`filter-btn ${selectedFilter === 'completed' ? 'active' : ''}`}
                onClick={() => handleFilterChange('completed')}
              >
                Completed (
                {
                  enhancedGamesData.filter((game) => game.status.toLowerCase() === 'completed')
                    .length
                }
                )
              </button>
            </div>
          </div>
        </section>

        {/* 🚀 GAMES GRID WITH ID FOR SCROLL TARGET */}
        <section
          id="games-grid-section"
          className={getSectionClass()}
          data-game-count={filteredGames.length}
          data-estimated-rows={getEstimatedRows()}
        >
          {filteredGames.length === 0 ? (
            <div className="no-games-message">
              <h3>No games found</h3>
              <p>Try selecting a different filter to see more games.</p>
            </div>
          ) : (
            <div className={getGridClass()}>
              {filteredGames.map((game) => (
                <div key={game.id} className="game-card">
                  <div className="game-card-image">
                    <img src={game.coverImage} alt={game.title} />
                    <div className="game-card-overlay">
                      {/* 🚀 ENHANCED LINK WITH SCROLL TO TOP */}
                      <ScrollLink to={`/Portafolio_PW3/games/${game.id}`} className="play-button">
                        <span>View Details</span>
                      </ScrollLink>
                    </div>
                    <div
                      className="game-status"
                      style={{ backgroundColor: getStatusColor(game.status) }}
                    >
                      {game.status}
                    </div>
                  </div>

                  <div className="game-card-content">
                    <h3 className="game-title">{game.title}</h3>
                    <p className="game-subtitle">{game.subtitle}</p>
                    <p className="game-description">{game.description}</p>

                    <div className="game-meta">
                      <div className="game-info">
                        <span className="game-category">{game.category}</span>
                        <span className="game-year">{game.year}</span>
                      </div>
                      <div className="game-platform">{game.platform}</div>
                    </div>

                    <div className="game-tech">
                      {game.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* 🚀 ENHANCED FOOTER WITH SCROLL TO TOP */}
                    <div className="game-footer">
                      <span className="game-team">{game.team}</span>
                      <ScrollLink to={`/Portafolio_PW3/games/${game.id}`} className="game-link">
                        Explore Game →
                      </ScrollLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="itchio-content">
          <div className="itchio-container">
            <div className="itchio-logo-section">
              <div className="itchio-logo">
                <div className="itchio-icon">🎮</div>
              </div>
              <div className="itchio-text">
                <h2 className="itchio-brand">itch.io</h2>
                <p className="itchio-subtitle">Game Portfolio</p>
              </div>
            </div>

            <div className="itchio-info">
              <h1 className="itchio-title">Play & Experience My Games</h1>
              <p className="itchio-description">
                Visit my itch.io profile to play and experience some of the games showcased above.
                Download, test, and enjoy interactive demos and full versions of my game development
                projects. Discover the creativity and passion behind each project!
              </p>

              <a
                href="https://crislayb.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-itchio"
              >
                <div className="btn-neon-itchio">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <p className="text-itchio">Visit My itch.io Profile</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <hr className="hr-contact" />
        <section className="eleven">
          <Contact />
        </section>
      </div>
    </div>
  )
}

// Make sure to export as default if that's how you're importing it
export default Games
