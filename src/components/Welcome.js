import React, {Component} from 'react'

class Welcome extends Component {
    render(){
        const {name, lang} = this.props
    return(
        <div>
            <h2>Welcome in class {name } and lang is {lang}</h2>
            {this.props.children}
        </div>
    )
    }
}

export default Welcome