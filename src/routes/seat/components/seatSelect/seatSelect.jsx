import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { data } from '../../../../api/seat.json'

const { returnValue: { data: seats } } = data

const SEAT_WIDTH = 50
const SEAT_HEIGHT = 50
const ratio = window.devicePixelRatio
const REAL_SEAT_WIDTH = SEAT_WIDTH * ratio
const REAL_SEAT_HEIGHT = SEAT_HEIGHT * ratio

const lastSeat = seats[seats.length - 1]
const CANVAS_WIDTH = lastSeat.colIndex * SEAT_WIDTH
const CANVAS_HEIGHT = lastSeat.rowIndex * SEAT_HEIGHT
const REAL_WIDTH = CANVAS_WIDTH * ratio
const REAL_HEIGHT = CANVAS_HEIGHT * ratio

export class SeatSelect extends Component {
  static propTypes = {

  }

  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d')
    this.ctx.font = `${10 * ratio}px Arial`
    this.ctx.fillStyle = '#fff'
    this.ctx.textAlign = 'center'

    let loadImg = (type, src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          this[type] = img
          resolve()
        }
        img.src = src
      })
    }

    Promise.all([
      loadImg('emptyImage', './source/seat-empty.png'),
      loadImg('selectImage', './source/seat-selected.png'),
      loadImg('soldImage', './source/seat-sold.png'),
    ]).then(() => {
      this.drawAllSeat()
    }).catch(err => console.log(err))
  }

  componentDidUpdate() {
    this.ctx.clearRect(0, 0, REAL_WIDTH, REAL_HEIGHT)
    this.drawAllSeat()
    this.drawSelected()
    console.log(this.props.selectedSeat)
  }

  drawAllSeat = () => {
    for(let i = 0; i < seats.length; i ++) {
      const { isSold, xPos, yPos } = seats[i]
      const offsetLeft = (xPos - 1) * REAL_SEAT_WIDTH
      const offsetTop = (yPos - 1) * REAL_SEAT_HEIGHT

      this.ctx.drawImage(
        isSold ? this.soldImage : this.emptyImage,
        offsetLeft,
        offsetTop,
        REAL_SEAT_WIDTH,
        REAL_SEAT_HEIGHT
      )
    }
  }

  drawSelected = () => {
    const { selectedSeat } = this.props
    for(let i = 0; i< selectedSeat.length; i++) {
      const { xPos, yPos, rowIndex, colIndex } = selectedSeat[i]
      const offsetLeft = (xPos - 1) * REAL_SEAT_WIDTH
      const offsetTop = (yPos - 1) * REAL_SEAT_HEIGHT
      this.ctx.drawImage(
        this.selectImage,
        offsetLeft,
        offsetTop,
        REAL_SEAT_WIDTH,
        REAL_SEAT_HEIGHT
      )
      this.ctx.fillText(`${rowIndex}排`, offsetLeft + REAL_SEAT_WIDTH / 2, offsetTop + REAL_SEAT_WIDTH / 2.5);
      this.ctx.fillText(`${colIndex}座`, offsetLeft + REAL_SEAT_HEIGHT / 2, offsetTop + REAL_SEAT_HEIGHT * 2 / 3)
    }
  }

  selectSeat = (e) => {
    const rect = this.refs.canvas.getBoundingClientRect()
    const x = Math.ceil( (e.pageX - rect.left) / SEAT_WIDTH )
    const y = Math.ceil( (e.pageY - rect.top) / SEAT_HEIGHT )
    console.log(x , y)

    const seat = seats.find(item => item.xPos === x && item.yPos === y)

    if (!seat || seat.isSold) {
      return;
    }

    const index = this.props.selectedSeat.findIndex(item => item.id === seat.id)

    if (index > -1){
      this.props.removeSeat(seat.id)
    } else if (this.props.selectedSeat.length >= 4) {
      alert('最多只能选择四个位置！')
    } else {
      this.props.addSeat(seat)
    }
  }

  render() {
    return (
      <div>
        <canvas style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT}}
            width={REAL_WIDTH}
            height={REAL_HEIGHT}
            ref="canvas"
            onClick={this.selectSeat}
        />
      </div>
    )
  }
}

export default SeatSelect
