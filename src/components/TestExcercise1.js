import React, { Component } from 'react'

class TestExcercise1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number: 0
        }
    }
    increaseHandler(){
        this.setState({
            number: this.state.number + 1
        })
        console.log(this.state.number)
    }
    decreaseHandler(){
        this.setState({
            number: this.state.number - 1
        })
        console.log(this.state.number)
    }
    render() {
        return (
            <div>

                <button onClick = {()=> this.increaseHandler()}>Increment</button><br/>
                <button onClick ={()=> this.decreaseHandler()}>Decrement</button><br/>
                {this.state.number}
            </div>
        )
    }
}

export default TestExcercise1
