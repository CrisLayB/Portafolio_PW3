// src/pages/GameView.jsx - COMPLETE FIXED VERSION
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import '../css/GameView.css'
// Import section components
import CodeShowcaseSection from '../components/gameView/CodeShowcaseSection'
import EnhancedRelatedGamesSection from '../components/gameView/EnhancedRelatedGamesSection'
import FeaturesSection from '../components/gameView/FeaturesSection'
import GallerySection from '../components/gameView/GallerySection'
import HackathonStorySection from '../components/gameView/HackathonStorySection'
import HeroSection from '../components/gameView/HeroSection'
import OverviewSection from '../components/gameView/OverviewSection'
import { enhancedGamesData } from '../data/games-data'
import { scrollToTop } from '../utils/scroll'

const GameView = () => {
  const { gameId } = useParams()
  const navigate = useNavigate()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)

  // 🚀 ENHANCED SCROLL TO TOP FUNCTION
  const handleScrollToTop = () => {
    scrollToTop({ smooth: true, delay: 100 })
  }

  // 🚀 AUTOMATIC SCROLL TO TOP WHEN GAME CHANGES
  useEffect(() => {
    // Scroll to top when component mounts or gameId changes
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [gameId])

  useEffect(() => {
    // Find the game by ID
    const foundGame = enhancedGamesData.find((g) => g.id === gameId)

    if (foundGame) {
      setGame(foundGame)
    } else {
      // Game not found, redirect to games page
      navigate('/Portafolio_PW3/games')
    }
    setLoading(false)
  }, [gameId, navigate])

  // Section component mapping
  const sectionComponents = {
    hero: HeroSection,
    overview: OverviewSection,
    'code-showcase': CodeShowcaseSection,
    features: FeaturesSection,
    gallery: GallerySection,
    'hackathon-story': HackathonStorySection,
  }

  const renderSection = (section, index) => {
    const SectionComponent = sectionComponents[section.type]

    if (!SectionComponent) {
      console.warn(`Unknown section type: ${section.type}`)
      return null
    }

    return (
      <SectionComponent
        key={`${section.type}-${index}`}
        game={game}
        config={section.data}
        customContent={game.contentConfig.customContent}
        sectionIndex={index}
      />
    )
  }

  if (loading) {
    return (
      <div className="game-view-loading">
        <div className="loading-spinner"></div>
        <p>Loading game details...</p>
      </div>
    )
  }

  if (!game) {
    return (
      <div className="game-view-error">
        <h2>Game Not Found</h2>
        <p>The game youre looking for doesnt exist.</p>
        <Link to="/Portafolio_PW3/games" className="back-to-games-btn" onClick={handleScrollToTop}>
          ← Back to Games
        </Link>
      </div>
    )
  }

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

  return (
    <div className="game-view">
      {/* 🚀 ENHANCED NAVIGATION BAR WITH BETTER RESPONSIVE HANDLING */}
      <nav className="game-view-nav">
        <div className="nav-container">
          <Link to="/Portafolio_PW3/games" className="back-btn" onClick={handleScrollToTop}>
            <span className="back-icon">←</span>
            <span className="back-text">Back to Games</span>
          </Link>

          <div className="game-nav-info">
            <h1 className="game-nav-title">{game.title}</h1>
            <span
              className="game-nav-status"
              style={{ backgroundColor: getStatusColor(game.status) }}
            >
              {game.status}
            </span>
          </div>

          <div className="nav-actions">
            {game.link && (
              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="play-game-btn"
              >
                <span className="play-text">Play Game</span>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Dynamic Content Sections */}
      <main className="game-view-content">
        {game.contentConfig.contentSections.map((section, index) => renderSection(section, index))}
      </main>

      {/* 🚀 ENHANCED RELATED GAMES SECTION */}
      <EnhancedRelatedGamesSection
        currentGame={game}
        allGames={enhancedGamesData}
        maxGames={3}
        getStatusColor={getStatusColor}
        handleScrollToTop={handleScrollToTop}
      />
    </div>
  )
}

export default GameView
