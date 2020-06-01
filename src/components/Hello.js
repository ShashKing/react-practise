import React from 'react'

export const Hello = () =>{
    //using jsx
    // return(
    //     <div>
    //         <h1>Hello Shashank</h1>
    //     </div>
    // )\
    // without using jsx
    return React.createElement('div', {id: "hello", className:"hello1"}, React.createElement('h1', null, 'Hello Shashank'))
}
export default Hello