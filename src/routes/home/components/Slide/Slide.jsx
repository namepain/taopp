import React from 'react'
import PropTypes from 'prop-types'
import Slicker from 'react-slick'
import './Slide.css'

const slide = ({ data }) => {
  const setting = {
    dots: true,
    autoplay: true,
    className: 'carousel',
    dotsClass: 'carousel-dots'
  }

  return (
    <Slicker {...setting}>
      {
        data.map(item => (
          <div key={item.id}>
            <img src={'http://gw.alicdn.com/' + item.smallPicUrl} className="carousel-image" alt={item.title}/>
          </div>
        ))
      }
    </Slicker>
  )
}

slide.propTypes = {
  data: PropTypes.array.isRequired
}

export default slide
