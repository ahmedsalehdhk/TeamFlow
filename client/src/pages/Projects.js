import React from 'react'

// components
import Navbar from '../components/Navbar'
import UserPanel from '../components/UserPanel'

export default function Projects() {
  return (
    <div className='projects flex justify-between'>
      <Navbar />
      <div className="main py-16 px-16 grow">Projects</div>
      <UserPanel />
    </div>
  )
}
