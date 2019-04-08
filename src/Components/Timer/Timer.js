import React, {Component} from 'react'

class Timer extends Component {
    state = {
        min: 5,
        sec: 1
    }
    
    componentDidMount() {
        // const min = this.state.min
        // const sec = this.state.sec

        const calcTime = () => {
            const sec = this.state.sec
            const min = this.state.min

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

    render() {
        return (
            <h1>{this.state.min} : {this.state.sec}</h1>
        )
    }
}

export default Timer