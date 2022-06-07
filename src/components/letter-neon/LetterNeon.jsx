import React from 'react'

import './LetterNeon.css'

const LetterNeon = ({ field }) => {
  return (
    <div className="wrapper">
      <div className="neon-wrapper">
        <span className="txt" style={{ '--i': field }}>
          {field}
        </span>
        <span className="gradient"></span>
        <span className="dodge"></span>
      </div>
    </div>
  )
}

export default LetterNeon
