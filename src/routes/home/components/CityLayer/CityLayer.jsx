import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from '../../../../api/fetch.js'
import './CityLayer.css'

export default class CityLayer extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  state = {
    hot: [],
    all: {}
  }

  componentWillMount() {
    this.getCitys()
  }

  getCitys = async () => {
    const data = await fetch('city')
    const { hot, all } = data

    this.setState({
      hot,
      all
    })
  }

  render() {
    const { onClose, onSelect } = this.props;
    const { hot, all } = this.state;
    const indexList = Object.keys(all)

    return (
      <div className="cityLayer">
        <div className="cityLayer-title">
          <div className="cityLayer-close" onClick={onClose}>关闭</div>
          选择城市
        </div>
        <div className="cityLayer-content">
          <div className="cityBlock">
            <div className="cityBlock-label" id="定位">定位城市</div>
            <div className="cityBlock-wrapper">
              <div className="cityBlock-item" onClick={() => onSelect('杭州')}>杭州</div>
            </div>
          </div>
          <div className="cityBlock">
            <div className="cityBlock-label" id="热门">热门城市</div>
            <div className="cityBlock-wrapper">
              {
                hot.map(city => (
                  <div key={city.id} className="cityBlock-item"
                    onClick={() => onSelect(city.regionName)}
                  >{city.regionName}</div>
                ))
              }
            </div>
          </div>
          {
            indexList.map(key => (
              <div className="cityList" key={key}>
                <div className="cityList-label" id={key}>{key}</div>
                <ul className="cityList-wrap">
                  {
                    all[key].map(city => (
                      <li key={city.cityCode} className="cityList-item"
                        onClick={() => onSelect(city.regionName)}
                      >{city.regionName}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
        <div className="cityLayer-index">
          <ul className="indexList">
            <li className="indexList-item"><a href="#定位">定位</a></li>
            <li className="indexList-item"><a href="#热门">热门</a></li>
            {
              indexList.map(key => (
                <li key={key} className="indexList-item">
                  <a href={`#${key}`}>{key}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
