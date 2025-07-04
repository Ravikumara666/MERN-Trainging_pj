import React, { useState } from 'react'

export default function UseStateEx() {

    const[students,setStudents]=useState(
        {
            name:"ravi",
            age:20
        }
    )

    function ChangeName()
    {
        setStudents((data)=>{return{...data,name:"villan",age:30}})
    }
  return (
    <div>


        <button onClick={ChangeName}>Click</button>
        <Card name={students.name} age={students.age}/>
    </div>
  )
}


function Card({name,age})
{
    return(
        <h1>Name is {name} location {age}</h1>
    )
}