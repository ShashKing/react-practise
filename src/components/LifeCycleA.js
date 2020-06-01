import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'shashank'
        }
        console.log('LifeCycle A Constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle A getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycle A componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycle A shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycle A getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycle A componentDidUpdate')
    }
    changeState = ()=>{
        this.setState({
            name:'Neha'
        })
    }

    render() {
        console.log('LifeCycle A render')
        return (
            <div>
                LifeCycle A
                <LifeCycleB/>
                <button onClick = {this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleA
