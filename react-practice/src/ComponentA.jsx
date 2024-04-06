import React, { useState } from 'react'
import ComponentB from './ComponentB'


export default function ComponentA() {
    const [user, setUser] = useState("sam")


  return (
    <div className='box'>
        <h1>Component</h1>
        <h1>{`hello ${user}`}</h1>
       <ComponentB/>
      
    </div>
  )
}
