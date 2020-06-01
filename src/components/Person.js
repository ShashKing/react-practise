import React from 'react'

function Person({person}) {


    return (
        <div >
            <h2>
                I am {person.name} and my age is {person.age} i have skill in {person.skill}
            </h2>
        </div>
    )
}

export default Person
