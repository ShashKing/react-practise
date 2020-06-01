import React, { Component } from 'react'
import ComponentE from './ComponentE'
import ComponentG from './ComponentG'

class ComponentC extends Component {
    // Context 
    // 1. Create the context
    // 2. Provide a context value
    // 3. Consume the Context value
    render() {
        return (
            <div>
                Component C
                <ComponentE/>
                <ComponentG/>
            </div>
        )
    }
}

export default ComponentC
