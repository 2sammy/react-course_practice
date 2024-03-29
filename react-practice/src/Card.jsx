import React from 'react'
import profilePic from './assets/profile.jpg'

export default function Card() {
  return (
    <div className='card'>
        <img className='card-image' src={profilePic} alt="profile picture" />
        <h2 className='card-title'>Sam</h2>
        <p className='card-text'>i make websites and a student</p>
      
    </div>
  )
}
