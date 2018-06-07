import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './seat.css'
import SeatSelect from './components/seatSelect/seatSelect'
import SeatSelected from './components/seatSelected/seatSelected'

export class Seat extends Component {
  state = {
    selectedSeat: []
  }

  addSeat = (seat) => {
    this.setState((prevState) => ({
      selectedSeat: [...prevState.selectedSeat, seat]
    }))
  }

  removeSeat = (id) => {
    this.setState(prevState => ({
      selectedSeat: prevState.selectedSeat.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <div className="seat">
        <div className="seat-header">
          <div className="back"></div>
          <div className="title">德信影城</div>
          <div className="share"></div>
        </div>
        <div className="seat-movieInfo">
          <div className="seat-movieInfo-title">复仇者联盟</div>
          <div className="seat-movieInfo-time">今天 06-07 11:55 (英语 3D)</div>
        </div>
        <div className="seat-main">
          <div className="seat-tip" />
          <div className="seat-hall">
            <div className="seat-hall-screen">
              <p>9号厅 银幕</p>
            </div>
            <div className="seat-hall-select">
              <SeatSelect
                selectedSeat={this.state.selectedSeat}
                addSeat={this.addSeat}
                removeSeat={this.removeSeat}
              />
            </div>
          </div>
        </div>
        <div className="seat-ticket">
          <SeatSelected data={this.state.selectedSeat} removeSeat={this.removeSeat} />
        </div>
        <div className="seat-buy">
          37元 确认选座
        </div>
      </div>
    )
  }
}

export default Seat
