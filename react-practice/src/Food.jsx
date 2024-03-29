import React from 'react'

export default function Food() {
    
    const food1 = 'Pizza';
    const food2 = 'chicken';

  return (
    <ul>
        <li>Apple</li>
        <li>{food1}</li>
        <li>{food2.toLocaleUpperCase()}</li>
      
    </ul>
  )
}
