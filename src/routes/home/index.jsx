import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TopBar from './components/TopBar/TopBar'
import Slide from './components/Slide/Slide'
import MovieItem from './components/MovieItem/MovieItem'
import CityLayer from './components/CityLayer/CityLayer'
import TabMenu from '../../components/TabMenu/TabMenu'
import RenderToBody from '../../components/RenderToBody/RenderToBody'
import fetch from '../../api/fetch.js' 
import './index.css'

export default class Home extends Component {
  static propTypes = {}

  state = {
    city: '',
    poster: [],
    movie: [],
    isLayerShow: false
  }

  showCitys = () => {
    this.setState({
      isLayerShow: true
    })
  }

  hideCitys = () => {
    this.setState({
      isLayerShow: false
    })
  }

  changeCity = (city) => {
    this.setState({
      city
    })
    this.hideCitys()
  }

  componentWillMount() {
    this.getCity()
  }

  getCity = async () => {
    const data = await fetch('home')
    const { city, poster, movie } = data

    this.setState({
      city,
      poster,
      movie
    })
  }

  render() {
    const { city, poster, movie, isLayerShow } = this.state

    return (
      <div className="home">
        <TopBar city={city} showCitys={this.showCitys}/>
        <div className="home-slide">
          <div className="home-slideWrapper">
            <Slide data={poster} />
          </div>
        </div>
        <ul className="home-movie">
          {
            movie.map((item) => (
              <li key={item.id}>
                <Link to="/taopp/detail"><MovieItem data={item} /></Link>
              </li>
            ))
          }
        </ul>
        <TabMenu current="movie"/>
        {
          isLayerShow && <RenderToBody>
            <CityLayer onClose={this.hideCitys} onSelect={this.changeCity} />
          </RenderToBody>
        }
      </div>
    )
  }
}
