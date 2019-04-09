import React, {Component} from 'react'

class Timer extends Component {
    state = {
        min: 25,
        sec: 0
    }
    
    onTimerStart = () => {
        // const min = this.state.min
        // const sec = this.state.sec

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
        
        setInterval(calcTime, 1000)


    }

    onTimerReset = () => {
        this.setState({
            min: 25,
            sec: 0
        })
    }

    render() {
        return (
            <div>
                <h1 className="display-1">{this.state.min} : {this.state.sec}</h1>
                <button className="btn btn-outline-success" onClick={this.onTimerStart}>Start</button>
                <button className="btn btn-outline-danger" onClick={this.onTimerReset}>Reset</button>
            </div>
        )
    }
}

export default Timer