import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
        // callback ref
        this.cbref = null
        this.setCbref = (element) => {
            this.cbref = element
        }
    }
    componentDidMount(){
        // callback ref
        if (this.cbref){
            this.cbref.focus()
        }
        // normal ref
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type = "text" ref = {this.inputRef}></input>
                <input type = "text" ref = {this.setCbref}></input>

                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
