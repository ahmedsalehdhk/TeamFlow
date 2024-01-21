import React from 'react'

// components
import Navbar from '../components/Navbar'
import UserPanel from '../components/UserPanel'

export default function Calendar() {
  return (
    <div className='flex flex-col lg:flex-row h-screen justify-between'>
      <Navbar />
      <div className="main px-6 lg:px-16 py-6 lg:py-16 grow order-2">Calendar</div>
      <UserPanel/>
    </div>
  )
}
