import React from 'react'
import PropTypes from 'prop-types'
import './Star.css'

const Star = ({ value, size = 15 }) => {
  return (
    <div className="star" style={{ height: `${size}px`, width: `${size * 5}px`, backgroundSize: `${size}px` }}>
      <div className="star-top" style={{ width: `${value * 10}%`, backgroundSize: `${size}px` }}></div>
    </div>
  )
}

Star.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number
}

export default Star
