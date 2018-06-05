import React from 'react'
import PropTypes from 'prop-types'
import './commentList.css'
import Star from '../../../../components/Star/Star'

function toggleHidden(e) {
  const shouldHidden = parseInt(e.target.clientHeight, 10) > 120
  const hasHidden = e.target.classList.contains('overflow')
  if (hasHidden) {
    e.target.classList.remove('overflow')
  } else if (shouldHidden) {
    e.target.classList.add('overflow')
  }
}

const CommentList = ({ data, clickZan }) => {

  return (
    <ul className="comment-area">
      {
        data.map(item => (
          <li className="commentList" key={item.id}>
            <div className="commentItem">
              <div className="commentList-user">
                <div className="commentUser-avatar" style={{backgroundImage: item.avatar ? `url("http://gw.alicdn.com/${item.avatar}")` : ''}}></div>
                <div className="commentUser-detail">
                  <div className="commentUser-name">{item.nickName}</div>
                  <div className="commentUser-score">
                    <Star value={Math.floor(item.remark)} />
                    <span className="commentUser-value">{item.remark}</span>
                  </div>
                </div>
              </div>
              <div className="commentList-text" onClick={toggleHidden}>
                {item.content}
              </div>
              <div className="comment-detail">
                <div className="comment-time">4小时前</div>
                <div className={`comment-zan ${item.isFavor && 'zan-active'}`}>
                  <i onClick={() => clickZan(item.id)}></i> {item.favorCount}
                </div>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

CommentList.propTypes = {
  data: PropTypes.array.isRequired
}

export default CommentList
