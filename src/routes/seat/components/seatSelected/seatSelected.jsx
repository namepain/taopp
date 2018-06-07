import React from 'react'
import PropTypes from 'prop-types'
import './seatSelected.css'

const seatSelected = ({data, removeSeat}) => {
  return (
    <div className="wrapper">
      <ul className="ticketList">
        {
          data.map(item => (
            <li className="ticketItem" key={item.id}  onClick={() => removeSeat(item.id)}>
              <span>{item.rowIndex}排{item.colIndex}座</span>
              <span className="price">37元</span>
              <i className="icon-border"></i>
              <i className="icon-close"></i>
            </li>
          )) 
        }
      </ul>
    </div>
  )
}

seatSelected.propTypes = {
  data: PropTypes.array.isRequired,
  removeSeat: PropTypes.func.isRequired
}

export default seatSelected
