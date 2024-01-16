import React from 'react'

// components
import Navbar from '../components/Navbar'
import UserPanel from '../components/UserPanel'

export default function Tasks() {
  return (
    <div className='flex justify-between'>
      <Navbar />
      <div className="main py-16 px-16 grow">Tasks</div>
      <UserPanel />
    </div>
  )
}
