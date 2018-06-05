import React, { Component } from 'react'
import ScoreDistribute from '../scoreDistribute/scoreDistribute'
import './comment.css'
import TagList from '../tagList/tagList';
import CommentList from '../commentList/commentList'
import fetch from '../../../../api/fetch'

export default class Comment extends Component {
  static propTypes = {}

  state = {
    tags: [],
    comments: [],
    remark: '--',
    remarkCount : '--',
    scoreDataList: [],
    current: ''
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate() {
    const texts = this.refs.commentList.getElementsByClassName('commentList-text')
    Array.prototype.forEach.call(texts, (item) => {
      let shouldHidden = parseInt(item.clientHeight, 10) > 120
      shouldHidden && item.classList.add('overflow')
    })
  }

  changeTag = (code) => {
    if (code !== this.state.current) {
      this.setState({
        current: code
      })
    }
  }

  getData = async () => {
    const data = await fetch('comment')
    const { tabs: tags, comments, remark, remarkCount, scoreDataList } = data

    this.setState({
      tags,
      comments,
      remark,
      remarkCount,
      scoreDataList,
      current: tags[0] ? tags[0].code : ''
    })
  }

  clickZan = (id) => {
    this.setState((prevState) => ({
      comments: prevState.comments.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isFavor: !item.isFavor,
            favorCount: item.isFavor ? --item.favorCount : ++ item.favorCount
          }
        }

        return item
      })
    }))
  }

  render() {
    const { comments, tags, remark, remarkCount, scoreDataList, current } = this.state
    const filterComments = comments.filter(item => current === 'ALL' || item.tags.indexOf(current) > -1)

    return (
      <div className="comment">
        <h2 className="comment-title">观众热评</h2>
        <ScoreDistribute remark={remark} remarkCount={remarkCount} scoreDataList={scoreDataList}/>
        <div style={{marginTop: "25px"}}>
          <TagList data={tags} current={current} changeTag={this.changeTag} />
        </div>
        <div style={{marginTop: "25px"}} ref="commentList">
          <CommentList data={filterComments} clickZan={this.clickZan}/>
        </div>
      </div>
    )
  }
}


