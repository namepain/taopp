import React from 'react'
import PropTypes from 'prop-types'
import './tagList.css'

const TagList = ({ data, current, changeTag }) => {
  return (
    <div className="tagList">
      {
        data.map(item => (
          <span className={`tagList-item ${current === item.code && 'item-active'}`}
            key={item.code}
            title={item.title}
            onClick={() => changeTag(item.code)}
          >
            {item.name}
          </span>
        ))
      }
    </div>
  )
}

TagList.propTypes = {
  data: PropTypes.array.isRequired
}

export default TagList
