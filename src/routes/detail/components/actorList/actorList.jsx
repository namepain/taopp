import React from 'react'
import PropTypes from 'prop-types'
import './actorList.css'

const actorList = ({ data }) => {
  return (
    <div className="actorList">
      <h1 className="actorList-title">演职人员</h1>
      <ul className="actorList-list">
      {
        data.map(item => (
          <li className="actorList-item" key={item.id}>
            <a href="" className="actorInfo">
              <div className="actorInfo-actorImg" style={{backgroundImage: `url(http://gw.alicdn.com/${item.avatar})`}}></div>
              <dl className="detail">
                <dt className="detail-name">{item.artisteName}</dt>
                <dd className="detail-job">{item.roleName}</dd>
              </dl>
            </a>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

actorList.propTypes = {
  data: PropTypes.array.isRequired
}

export default actorList
