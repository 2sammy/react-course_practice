import React from 'react'
export default function Student(props) {

  return (
    <div className='student'>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "yes" : "no"}</p>
      
    </div>
  )
}
