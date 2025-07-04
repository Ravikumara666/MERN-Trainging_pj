import React, { useEffect, useState } from 'react'

export default function UseEffectEx() {

    const[num,setNum]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setNum(num=>num+1)

        },3000)
    },num)
  return (
    <div>
      <h1>This component Redered {num} Times</h1>
    </div>
  )
}
