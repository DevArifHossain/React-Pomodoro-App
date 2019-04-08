import React, { Component } from 'react'
import Timer from './Timer/Timer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Timer />
        <button>Start</button>
        <button>Reset</button>
      </div>
    )
  }
}
