import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './CollapsibleText.css'

export default class CollapsibleText extends Component {
  static propTypes = {
    children: PropTypes.any,
    height: PropTypes.number
  }
  
  state = {
    isCollapse: false,
    isNeedCollapse: false
  }

  static defaultProps = {
    height: 84
  }

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this)
    const value = this.props.height

    if (dom.clientHeight > value) {
      this.setState({
        isCollapse: true,
        isNeedCollapse: true
      })
    }
  }

  toggleState = () => {
    if (this.state.isNeedCollapse) {
      this.setState((prevState) => ({
        isCollapse: !prevState.isCollapse
      }))
    }
  }

  render() {
    
    const { isCollapse } = this.state
    const cls = isCollapse ? 'collapseText-collapse' : ''
    const maxHeight = isCollapse ? this.props.height : 'none'

    return (
      <div className={`collapseText ${cls}`} style={{ maxHeight: maxHeight }} onClick={ this.toggleState }>
        { this.props.children }
        { isCollapse && <div className="collapseText-label">展开</div> }
      </div>
    )
  }
}
