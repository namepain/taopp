import React from 'react'
import PropTypes from 'prop-types'
import './summary.css'
import Star from '../../../../components/Star/Star'

const summary = ({ data }) => {
  return (
    <div className="summary">
      <div className="summary-top">
        <div className="summary-item">
          <div className="summary-score">{data.remark} <Star value={Math.round(data.remark)} /></div>
          <div className="summary-title">观众评分{data.remarkCount}人</div>
        </div>
        <div className="summary-item">
          <div className="summary-score">{data.recommendStr}</div>
          <div className="summary-title">V淘推荐度</div>
        </div>
        <div className="summary-item">
          <div className="summary-score">{data.wantCount}</div>
          <div className="summary-title title-right">想看人数</div>
        </div>
      </div>
      <div className="summaryBtn">
        <button className="summaryBtn-item btn-want"><i className="icon icon-heart"></i>想看</button>
        <button className="summaryBtn-item btn-see"><i className="icon icon-star"></i>看过</button>
      </div>
    </div>
  )
}

summary.propTypes = {
  data: PropTypes.object.isRequired
}

export default summary
