import React, {Component} from 'react'
import './timer.css'

class Timer extends Component {
    state = {
        min: 25,
        sec: 0 + '0'
    }
    onTimerStart = () => {
        const calcTime = () => {
            const min = this.state.min
            const sec = this.state.sec

            this.setState({
                sec: (sec - 1).toString().padStart(2, '0') // -> adding '0' at first when num is less than 10
            })

            if(sec <= 0) {
                this.setState({
                    sec: 59,
                    min: (min -1).toString().padStart(2, '0')
                })
            }
        }

            // this -> makes stuff global so other functions can use this (not sure if i'm right with this statement but i hope so)
        this.increment = setInterval(calcTime, 1000)
    }

    onTimerReset = () => {
        clearInterval(this.increment)
        this.setState({
            min: 25, 
            sec: 0 + '0'
        })
    }

    render() {
        return (
            <div id="timer-con">
                <div class="timer">{this.state.min}:{this.state.sec}</div>
                <div className="btns">
                    <button className="btn start" onClick={this.onTimerStart}>Start</button>
                    <button className="btn reset" onClick={this.onTimerReset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Timer