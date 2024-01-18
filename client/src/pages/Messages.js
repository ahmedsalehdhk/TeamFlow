import React from 'react'

// components
import Navbar from '../components/Navbar'
import UserPanel from '../components/UserPanel'

export default function Messages() {
  return (
    <div className='flex flex-col md:flex-row h-screen justify-between'>
      <Navbar />
      <div className="main px-6 md:px-16 py-6 md:py-16 grow order-2">Messages</div>
      <UserPanel/>
    </div>
  )
}
