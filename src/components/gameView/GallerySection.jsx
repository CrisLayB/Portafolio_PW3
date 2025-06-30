import React, { useState } from 'react'

const GallerySection = ({ game, config = {} }) => {
  const { layout = 'grid', showCaptions = true } = config
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (!game.screenshots || game.screenshots.length === 0) {
    return null
  }

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setSelectedImage(game.screenshots[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % game.screenshots.length
    setLightboxIndex(nextIndex)
    setSelectedImage(game.screenshots[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = lightboxIndex === 0 ? game.screenshots.length - 1 : lightboxIndex - 1
    setLightboxIndex(prevIndex)
    setSelectedImage(game.screenshots[prevIndex])
  }

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Screenshot Gallery</h2>
          <p>Visual showcase of {game.title} gameplay and features</p>
          <div className="gallery-stats">
            <span>{game.screenshots.length} Screenshots</span>
          </div>
        </div>

        <div className={`gallery-grid ${layout}`}>
          {game.screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="gallery-item"
              role="button"
              tabIndex={0}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(index)
                }
              }}
            >
              <img
                src={screenshot}
                alt={`${game.title} screenshot ${index + 1}`}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-actions">
                  <button className="view-btn">🔍 View</button>
                  {showCaptions && (
                    <span className="image-number">
                      {index + 1} / {game.screenshots.length}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="lightbox-overlay"
          role="button"
          tabIndex={0}
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              closeLightbox()
            }
          }}
        >
          <div className="lightbox-container" role="dialog">
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>

            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              ❮
            </button>

            <img
              src={selectedImage}
              alt={`${game.title} screenshot ${lightboxIndex + 1}`}
              className="lightbox-image"
            />

            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              ❯
            </button>

            <div className="lightbox-info">
              <span>
                {lightboxIndex + 1} / {game.screenshots.length}
              </span>
              <h3>{game.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection
