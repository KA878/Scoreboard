import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlusButton from './PlusButton'
import './Player.css'
import './Scoreboard'
import './AddPlayer'


export default class Player extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired
  }

  handleOnClick = () => {
    const {id, score} = this.props
    this.props.updatePlayerScore(id, score + 1)
  }

  render() {
    return (
      <li className="player">
        <p className="name">{ this.props.name }</p>
        <p className="score">{ this.props.score }</p>
        <PlusButton onClick={this.handleOnClick} />
        
      </li>
    )
  }
}