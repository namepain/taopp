import React from 'react'
import PropTypes from 'prop-types'
import './LineLink.css'

const LineLink = ({ href, title, extra }) => {
  return (
    <a href="" className="linelink">
      <span className="linelink-title">{title}</span>
      <span className="linelink-extra">{extra}</span>
      <i className="linelink-arrow"></i>
    </a>
  )
}

LineLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired
}

export default LineLink
