import React, { Component } from 'react'
import Player from './Player.js'
import './Scoreboard.css'
import AddPlayer from './AddPlayer.js';



export default class Scoreboard extends Component {
    state = { players : [
        {
          id: 1,
          name: 'Wouter',
          score: 2
        },
        {
          id: 2,
          name: 'Mimi',
          score: 5
        },
        {
          id: 3,
          name: 'Milan',
          score: 4
        }
      ]
      }

    

    renderPlayer = (player) => {
    return (<Player
      id={player.id}
      name={player.name}
      score={player.score}
      key={player.id}
      updatePlayerScore={this.updatePlayerScore}
    />)
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {
            this.state.players
              .sort((a, b) => b.score - a.score)
              .map(this.renderPlayer)
          }
        </ul>
        <AddPlayer addPlayer={this.addPlayer} />
      </div>
    )
  }
  updatePlayerScore = (id, score) => {
    const updatedPlayers = this.state.players.map(
      player => {
        if (player.id === id) {
          return {
            ...player,
            score
          }
        }
        else {
          return player
        }
      }
    )
    this.setState({ players: updatedPlayers })
  }
  
  AddPlayer = () => {
  return <AddPlayer
  AddPlayer={this.props.onClick} />
}

addPlayer = (name) => {
    const player = {
        id: Math.round(Math.random()*100000),
        name,
        score: 0
    }
    this.setState({
        players: this.state.players.concat(player)
    })
}
}