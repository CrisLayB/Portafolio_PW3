import React from 'react'

const FeaturesSection = ({ game, config = {} }) => {
  const { displayStyle = 'cards', showIcons = true } = config

  if (!game.features || game.features.length === 0) {
    return null
  }

  // Icon mapping for different features
  const getFeatureIcon = (feature) => {
    const featureText = feature.toLowerCase()

    if (featureText.includes('combat') || featureText.includes('battle')) return '⚔️'
    if (featureText.includes('exploration') || featureText.includes('adventure')) return '🗺️'
    if (featureText.includes('narrative') || featureText.includes('story')) return '📖'
    if (featureText.includes('art') || featureText.includes('visual')) return '🎨'
    if (featureText.includes('environment') || featureText.includes('world')) return '🌍'
    if (featureText.includes('puzzle') || featureText.includes('logic')) return '🧩'
    if (featureText.includes('psychology') || featureText.includes('mind')) return '🧠'
    if (featureText.includes('difficulty') || featureText.includes('challenge')) return '📈'
    if (featureText.includes('education') || featureText.includes('learning')) return '🎓'
    if (featureText.includes('achievement') || featureText.includes('progress')) return '🏆'
    if (featureText.includes('time') || featureText.includes('management')) return '⏰'
    if (featureText.includes('ai') || featureText.includes('intelligence')) return '🤖'
    if (featureText.includes('weapon') || featureText.includes('gun')) return '🔫'
    if (featureText.includes('destruct') || featureText.includes('break')) return '💥'
    if (featureText.includes('wave') || featureText.includes('horde')) return '👾'
    if (featureText.includes('score') || featureText.includes('point')) return '📊'
    if (featureText.includes('strategy') || featureText.includes('tactical')) return '♟️'
    if (featureText.includes('historical') || featureText.includes('history')) return '🏛️'
    if (featureText.includes('unit') || featureText.includes('army')) return '👥'
    if (featureText.includes('campaign') || featureText.includes('mode')) return '🎯'
    if (featureText.includes('authentic') || featureText.includes('real')) return '✨'
    if (featureText.includes('cultural') || featureText.includes('tradition')) return '🏮'
    if (featureText.includes('cooking') || featureText.includes('recipe')) return '👨‍🍳'
    if (featureText.includes('music') || featureText.includes('audio')) return '🎵'
    if (featureText.includes('atmosphere') || featureText.includes('mood')) return '🌙'
    if (featureText.includes('lighting') || featureText.includes('light')) return '💡'
    if (featureText.includes('gothic') || featureText.includes('dark')) return '🦇'
    if (featureText.includes('focus') || featureText.includes('attention')) return '🎯'

    return '🎮' // Default gaming icon
  }

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2>Game Features</h2>
          <p>Key gameplay elements and mechanics that make this game special</p>
        </div>

        <div className={`features-grid ${displayStyle}`}>
          {game.features.map((feature, index) => (
            <div key={index} className="feature-card">
              {showIcons && <div className="feature-icon">{getFeatureIcon(feature)}</div>}
              <div className="feature-content">
                <h3>{feature}</h3>
                <div className="feature-highlight"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
