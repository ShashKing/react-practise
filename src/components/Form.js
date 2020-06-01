import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             comments:'',
             topic:'react'
        }
    }
    handlerUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    handlerCommentChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }
    handlerChangeTopic = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        const {userName, comments, topic} = this.state
        return (
            <form onSubmit = {this.handleSubmit} >
                <div>
                    <label>Username</label>
                    <input type = 'text' value = {userName} onChange={this.handlerUserNameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value = {comments} onChange = {this.handlerCommentChange}> </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange = {this.handlerChangeTopic}>
                        <option value = "react">React</option>
                        <option value = "angular">Angular</option>
                        <option value = "vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
