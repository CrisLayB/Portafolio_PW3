const HackathonStorySection = ({ config, customContent }) => {
  if (!customContent.hackathonStory) return null

  return (
    <section className="hackathon-story-section">
      <div className="hackathon-container">
        <h2>{customContent.hackathonStory.duration} Development Challenge</h2>

        {config.showTimeline && (
          <div className="development-timeline">
            <h3>Development Timeline</h3>
            <div className="timeline">
              {customContent.hackathonStory.timeline.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-hour">Hour {event.hour}</div>
                  <div className="timeline-event">{event.event}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {config.showChallenges && (
          <div className="hackathon-challenges">
            <br></br>
            <h3>Challenges & Solutions</h3>
            <ul className="challenges-list">
              {customContent.hackathonStory.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}

        {config.showTeamworkers && (
          <div className="hackathon-challenges">
            <br></br>
            <h3>Tem work strategies</h3>
            <ul className="challenges-list">
              {customContent.hackathonStory.teamwork.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default HackathonStorySection
