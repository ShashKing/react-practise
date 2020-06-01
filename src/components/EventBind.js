import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:"Good Bye"
    //     })
    //     console.log(this)
    // }
    clickHandler =()=>{
        this.setState({
            message:"Good Bye"
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> bind approach*/}
                {/* <button onClick={this.clickHandler}>Click</button>best option binding in the constructor */}
                {/* <button onClick = {() => this.clickHandler()}>Click</button> arrow function approach*/}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>good option to use this approach class property arrow function */}

            </div>
        )
    }
}

export default EventBind
