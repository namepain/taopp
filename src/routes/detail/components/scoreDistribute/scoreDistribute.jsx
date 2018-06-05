import React from 'react'
import PropTypes from 'prop-types'
import './scoreDistribute.css'
import Star from '../../../../components/Star/Star'

const ScoreDistribute = ({ remark, remarkCount, scoreDataList }) => {
  return (
    <div className="scoreDis">
      <div className="scoreDis-left">
        <div className="score">{remark}</div>
        <div className="desc">{remarkCount}人</div>
      </div>
      <div className="scoreDis-right">
        <div className="stars">
         {
           scoreDataList.map(item => (
            <div className="stars-item" key={item.name}>
              <Star value={item.name * 2} size={6} />
              <div className="percent">
                <div className="percent-item" style={{width: `${item.score}%`}}></div>
              </div>
            </div>
           ))
         }
        </div>
      </div>
    </div>
  )
}

ScoreDistribute.propTypes = {
  remark: PropTypes.string.isRequired,
  remarkCount: PropTypes.string.isRequired,
  scoreDataList: PropTypes.array.isRequired
}

export default ScoreDistribute


