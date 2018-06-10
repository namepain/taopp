import React, { Component } from 'react'
import './detail.css'
import { Link } from 'react-router-dom'
import BaseInfo from './components/baseInfo/baseInfo';
import Summary from './components/summary/summary';
import ActortList from './components/actorList/actorList'
import CollapsibleText from '../../components/CollapsibleText/CollapsibleText'
import Comment from './components/comment/comment'
import LineLink from '../../components/LineLink/LineLink'
import fetch from '../../api/fetch'

export default class componentName extends Component {

  state = {
    actor: [],
    description: '',
    duration: '',
    id: '',
    openCountry: '',
    openDay: '',
    openTime: '',
    poster: '',
    showMark: '',
    showName: '',
    showNameEn: '',
    type: '',
    wantCount: '',
    remark: '',
    remarkCount: '',
    recommendStr: '',
    country: ''
  }

  componentDidMount() {
    this.getAcroeList()
  }

  getAcroeList = async () => {
    const data = await fetch('detail');

    console.log(data)
    this.setState({
      ...data
    })
  }

  render() {

    const data = this.state
    const { actor } = data
    console.log(actor)

    return (
      <div className="detail">
        <div className="detail-top">
          <div className="detail-operation">
            <div className="icon-back" onClick={() => {window.history.back()}}></div>
            <div className="icon-share"></div>
          </div>
          <BaseInfo data={data}/>
        </div>
        <div className="detail-content">
          <div className="content-module">
            <Summary data={data} />
          </div>
          <div className="content-module">
            <div className="detail-view">
              <CollapsibleText>
                <div>
                  {data.description}
                </div>
              </CollapsibleText>
            </div>
          </div>
          <div className="content-module">
            <ActortList data={actor} />
          </div>
          <div className="content-module">
            <Comment />
          </div>
          <div className="content-module">
            <h2>影片资料</h2>
            <div>
              <LineLink href="" title="幕后花絮" extra="" />
              <LineLink href="" title="台词精选" extra="" />
              <LineLink href="" title="出品发行" extra="" />
            </div>
          </div>
        </div>
        <Link to="/taopp/seat" className="buyBtn" >选座购票</Link>
      </div>
    )
  }
}
