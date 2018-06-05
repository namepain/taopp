import React, { Component } from 'react'
import './detail.css'
import BaseInfo from './components/baseInfo/baseInfo';
import Summary from './components/summary/summary';
import ActortList from './components/actorList/actorList'
import CollapsibleText from '../../components/CollapsibleText/CollapsibleText'
import Comment from './components/comment/comment'
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
            <div className="icon-back"></div>
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
        </div>
      </div>
    )
  }
}
