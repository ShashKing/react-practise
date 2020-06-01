import React from 'react'

const Greet =  props =>{
const {name, lang} = props 

return (
    <div>
        <h1>Hello {name} and language is {lang}</h1>
    </div>
)
}
export default Greet 