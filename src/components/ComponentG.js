import React, { Component } from 'react'
import { UserConsumer } from './UserContect'

class ComponentG extends Component {
    render() {
        return (
                <UserConsumer>
                    {
                        username => {
                        return(<div>Hello {username}</div>)
                        }
                    }
                </UserConsumer>
        )
    }
}

export default ComponentG
