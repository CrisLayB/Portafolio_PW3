import { useState } from 'react'

const CodeShowcaseSection = ({ config, customContent }) => {
  const [activeCodeIndex, setActiveCodeIndex] = useState(0)

  if (!customContent.codeSnippets) return null

  const currentCode = customContent.codeSnippets[activeCodeIndex]

  return (
    <section className="code-showcase-section">
      <div className="code-container">
        <h2>Code Showcase</h2>
        <p style={{ textAlign: 'center' }}>
          Here are some key programming implementations from this project:
        </p>
        <br></br>
        <div className="code-navigation">
          {customContent.codeSnippets.map((snippet, index) => (
            <button
              key={index}
              className={`code-nav-btn ${index === activeCodeIndex ? 'active' : ''}`}
              onClick={() => setActiveCodeIndex(index)}
            >
              {snippet.title}
            </button>
          ))}
        </div>

        <div className="code-display">
          <div className="code-header">
            <h3>{currentCode.title}</h3>
            <span className="code-language">{currentCode.language}</span>
          </div>
          <pre className="code-block">
            <code className={`language-${currentCode.language}`}>{currentCode.code}</code>
          </pre>
        </div>

        {config.showArchitecture && (
          <div className="architecture-info">
            <h3>Architecture Highlights</h3>
            <ul>
              <li>Modular component-based design</li>
              <li>Scalable state management</li>
              <li>Performance-optimized algorithms</li>
              <li>Clean code principles</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default CodeShowcaseSection
