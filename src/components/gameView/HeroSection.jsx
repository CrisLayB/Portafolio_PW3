import { useState } from 'react'

const HeroSection = ({ game, config }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % game.screenshots.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? game.screenshots.length - 1 : prev - 1))
  }

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src={game.backgroundImage || game.coverImage}
          alt={game.title}
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{game.title}</h1>
          <p className="hero-subtitle">{game.subtitle}</p>
          <p className="hero-description">{game.description}</p>

          <div className="hero-meta">
            <span className="hero-platform">{game.platform}</span>
            <span className="hero-year">{game.year}</span>
            <span className="hero-category">{game.category}</span>
          </div>
        </div>

        {config.showGallery && (
          <div className="hero-gallery">
            {config.galleryType === 'carousel' ? (
              <div className="image-carousel">
                <button className="carousel-btn prev" onClick={prevImage}>
                  ❮
                </button>
                <img
                  src={game.screenshots[currentImageIndex]}
                  alt={`${game.title} screenshot ${currentImageIndex + 1}`}
                  className="carousel-image"
                />
                <button className="carousel-btn next" onClick={nextImage}>
                  ❯
                </button>
                <div className="carousel-indicators">
                  {game.screenshots.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="image-grid">
                {game.screenshots.slice(0, 4).map((img, index) => (
                  <button
                    key={index}
                    className="grid-image-btn"
                    onClick={() => setCurrentImageIndex(index)}
                    type="button"
                    aria-label={`Show screenshot ${index + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${game.title} screenshot ${index + 1}`}
                      className="grid-image"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
