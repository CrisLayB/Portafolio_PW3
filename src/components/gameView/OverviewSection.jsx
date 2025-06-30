const OverviewSection = ({ game, config }) => {
  return (
    <section className="overview-section">
      <div className="overview-container">
        <h2>Project Overview</h2>

        <div className="overview-grid">
          <div className="overview-description">
            <h3>About the Project</h3>
            <p>{game.longDescription}</p>

            {game.features && (
              <div className="features-list">
                <h4>Key Features</h4>
                <ul>
                  {game.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {config.showTechnicalSpecs && (
            <div className="technical-specs">
              <h3>Technical Specifications</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Platform:</span>
                  <span>{game.platform}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Engine:</span>
                  <span>{game.technologies[0] || 'Unity'}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Languages:</span>
                  <span>{game.technologies.join(', ')}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Status:</span>
                  <span>{game.status}</span>
                </div>
              </div>
            </div>
          )}

          {config.showTeamInfo && (
            <div className="team-info">
              <h3>Development Team</h3>
              <p>
                <strong>Team:</strong> {game.team}
              </p>
              <p>
                <strong>Size:</strong> {game.teamSize}
              </p>
              {game.development && (
                <>
                  <p>
                    <strong>Duration:</strong> {game.development.startDate} -{' '}
                    {game.development.estimatedRelease || game.development.completionDate}
                  </p>
                  {game.development.progress && (
                    <div className="progress-bar">
                      <label>Progress: {game.development.progress}%</label>
                      <div className="progress-container">
                        <div
                          className="progress-fill"
                          style={{ width: `${game.development.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default OverviewSection
