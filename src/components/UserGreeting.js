import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true //or false
        }
    }
    
    render() {
        //First Approach *******************
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Shashank
        //         </div>
        //     )
        // }
        // else
        // {
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
        // Second approach *****************
    //     let message (best)
    //     if (this.state.isLoggedIn){
    //         message = <div>Welcome Shashank</div>
    //     }
    //     else{
    //         message = <div>Welcome Guest</div>
    //     }
    // return <div>{message}</div>
    //Third Approach ************* (best)
    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Shashank</div> :
    //     <div>Welcome Guest</div>
    // )
    // Fourth Approach
   return this.state.isLoggedIn && <div>Welcome Shashank</div>

    }
}

export default UserGreeting
