import React from 'react'
import Person from './Person'

function ListData() {
    const names = ['Bruce','Clark', 'Diana','Bruce']
    const people = [
        {
            id: 1,
            name: 'Shashank',
            skill: 'React',
            age: 25
        },
        {
            id: 2,
            name: 'Neha',
            skill: 'Python',
            age:22
        },
        {
            id: 3,
            name: 'Aman',
            skill: 'Android',
            age: 24
        }
    ]
const nameList = names.map((name,index) =><h2 key={index}>{index} {name}</h2>)
    const personList = people.map((person, index) => <div key={person.id}><Person  person = {person}></Person></div>)
    return (
        <div>
            {
            }
            <br></br>
            {
                nameList
            }
        </div>
    )
}

export default ListData
