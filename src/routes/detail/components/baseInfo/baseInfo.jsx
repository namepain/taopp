import React from 'react'
import PropTypes from 'prop-types'
import './baseInfo.css'

const BaseInfo = ({ data }) => {
  return (
    <div className="baseInfo">
      <div className="baseInfo-detail">
        <div className="baseInfo-name">{data.showName}</div>
        <div className="baseInfo-subTitle">{data.showNameEn}</div>
        <div className="baseInfo-other">{data.type}</div>
        <div className="baseInfo-other">{data.country} / {data.duration}分钟</div>
        <div className="baseInfo-other">{data.openTime} 在{data.openCountry}上映 <span className="baseInfo-arrow"></span></div>
      </div>
      <div className="baseInfo-poster" style={{backgroundImage: data.poster ? `url("http://gw.alicdn.com/${data.poster}")` : ''}}></div>
    </div>
  )
}

BaseInfo.propTypes = {
  data: PropTypes.object.isRequired
}

export default BaseInfo
