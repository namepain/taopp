import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './TabMenu.css'

const TabMenu = ({ current }) => {
  return (
    <div className="tabMenu">
      <Link to="/taopp/" className={`tabMenu-btn ${current === 'movie' ? 'active' : '' }`}>
        <i className="tabMenu-icon tabMenu-icon-movie"></i>
        <span className="tabMenu-text">电影</span>
      </Link>
      <Link to="/taopp/user" className={`tabMenu-btn ${current === 'user' ? 'active' : '' }`}>
        <i className="tabMenu-icon tabMenu-icon-user"></i>
        <span className="tabMenu-text">我的</span>
      </Link>
    </div>
  )
}

TabMenu.propTypes = {
  current: PropTypes.string.isRequired
}

export default TabMenu
