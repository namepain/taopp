import React from 'react'
import PropTypes from 'prop-types'
import './MovieItem.css'

const MovieItem = ({ data }) => {
  const { poster, showName, director, leadingRole, remark, preScheduleRemark } = data
  
  return (
    <div className="movieItem">
      <div className="movieItem-poster">
        <img src={'http://gw.alicdn.com/' + poster} alt={showName} /></div>
      <div className="movieItem-detail">
        <div className="movieItem-name">{showName}</div>
        <div className="movieItem-score">观众评分 <span>{remark}</span></div>
        <div className="movieItem-director">导演：{director}</div>
        { leadingRole && <div className="movieItem-actor">主演：{leadingRole}</div> }
        <div className="movieItem-tag">
          {
            preScheduleRemark && <span className="tTag tTag--blue">今日最热</span>
          }
          {
            remark > 8 && <span className="tTag tTag--red">口碑不错</span>
          }
        </div>
      </div>
      <div className="movieItem-buy">
        <button className="tBtn">购票</button>
        <span className="movieItem-buy-price">9.9元起</span>
      </div>
    </div>
  )
}

MovieItem.propTypes = {
  data: PropTypes.object.isRequired
}

export default MovieItem
