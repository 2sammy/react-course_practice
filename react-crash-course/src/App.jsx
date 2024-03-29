import React from 'react'

const App = () => {
  const Fname  = 'mike';
  const x =12;
  const y = 18;
  const names = ['sam', 'manoah', 'risper'];
  return (
    <div>
      <div className='text-5xl'>App </div>
      <p style={{color: 'red'}}>hello sam {Fname}</p>
      <p> the sum of {x} and {y} is {x+y}</p>

      <ul>
        {names.map((name,index) => {
          <li key={index}>{name}</li>
        })}
      </ul>
    </div>
  )
}

export default App