import React from 'react'
import './user.css'
import LineLink from '../../components/LineLink/LineLink'
import TabMenu from '../../components/TabMenu/TabMenu'

export default () => {
  return (
    <div className="user">
      <div className="user-top">
        <div className="operation">
          <div className="operation-setting"></div>
          <div className="operation-message"></div>
        </div>
        <div className="user-info">
          <div className="user-avatar" />
          <div className="user-detail">
            <div className="user-name">周杰伦</div>
            <div>
              <span className="user-follow">关注 0 </span>
              <span className="user-fans">被关注 0</span>
            </div>
            <div className="user-level">黄金会员</div>
          </div>
        </div>
      </div>
      <div className="user-content">
        <LineLink title="收藏的电影" href="" extra="8" />
        <LineLink title="看过的电影" href="" extra="88" />
      </div>
      <TabMenu current="user" />
    </div>
  )
}
