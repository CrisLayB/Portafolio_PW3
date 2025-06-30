// src/components/gameView/EnhancedRelatedGamesSection.jsx

import React from 'react'
import { Link } from 'react-router-dom'

const EnhancedRelatedGamesSection = ({
  currentGame,
  allGames,
  maxGames = 3,
  getStatusColor,
  handleScrollToTop,
}) => {
  // Filter out current game and get related games
  const getRelatedGames = () => {
    const otherGames = allGames.filter((g) => g.id !== currentGame.id)

    // Prioritize games with similar categories or featured games
    const prioritizedGames = otherGames.sort((a, b) => {
      // First priority: same category
      const aIsSameCategory = a.category === currentGame.category ? 1 : 0
      const bIsSameCategory = b.category === currentGame.category ? 1 : 0

      // Second priority: featured games
      const aIsFeatured = a.featured ? 1 : 0
      const bIsFeatured = b.featured ? 1 : 0

      // Third priority: recent games (by year)
      const aYear = parseInt(a.year) || 0
      const bYear = parseInt(b.year) || 0

      return bIsSameCategory - aIsSameCategory || bIsFeatured - aIsFeatured || bYear - aYear
    })

    return prioritizedGames.slice(0, maxGames)
  }

  const relatedGames = getRelatedGames()

  if (relatedGames.length === 0) {
    return null
  }

  const getTechDisplay = (technologies) => {
    return technologies.slice(0, 3) // Show max 3 technologies
  }

  const getGameDescription = (description) => {
    return description.length > 120 ? description.substring(0, 120) + '...' : description
  }

  return (
    <section className="related-games-section">
      <div className="related-games-container">
        <div className="related-games-header">
          <h2>More Projects</h2>
          <p>Explore other games from my portfolio</p>
        </div>

        <div className={`related-games-grid games-count-${relatedGames.length}`}>
          {relatedGames.map((relatedGame) => (
            <Link
              key={relatedGame.id}
              to={`/Portafolio_PW3/games/${relatedGame.id}`}
              className="related-game-card"
              onClick={handleScrollToTop}
            >
              <div className="related-game-image-container">
                <img
                  src={relatedGame.coverImage}
                  alt={relatedGame.title}
                  className="related-game-image"
                  loading="lazy"
                />
                <div className="related-game-overlay">
                  <span className="view-project-btn">View Project</span>
                </div>
                <div
                  className="related-game-status"
                  style={{ backgroundColor: getStatusColor(relatedGame.status) }}
                >
                  {relatedGame.status}
                </div>
                {relatedGame.featured && <div className="featured-badge">⭐ Featured</div>}
              </div>

              <div className="related-game-content">
                <div className="related-game-meta">
                  <span className="game-category">{relatedGame.category}</span>
                  <span className="game-year">{relatedGame.year}</span>
                </div>

                <h3 className="related-game-title">{relatedGame.title}</h3>
                <p className="related-game-subtitle">{relatedGame.subtitle}</p>
                <p className="related-game-description">
                  {getGameDescription(relatedGame.description)}
                </p>

                <div className="related-game-tech">
                  {getTechDisplay(relatedGame.technologies).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                  {relatedGame.technologies.length > 3 && (
                    <span className="tech-more">+{relatedGame.technologies.length - 3} more</span>
                  )}
                </div>

                <div className="related-game-footer">
                  <div className="team-info">
                    <span className="team-size">{relatedGame.teamSize}</span>
                  </div>
                  <div className="view-more">View Details →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {allGames.length > maxGames + 1 && (
          <div className="view-all-games">
            <Link to="/Portafolio_PW3/games" className="view-all-btn" onClick={handleScrollToTop}>
              View All Projects ({allGames.length - 1} total)
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default EnhancedRelatedGamesSection
