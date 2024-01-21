// import { useState, useEffect } from 'react'

// components
import Navbar from '../components/Navbar'
import UserPanel from '../components/UserPanel'
import Header from '../components/Header'


export default function Dashboard() {
  

  return (
    <div className='dashboard flex flex-col lg:flex-row h-screen justify-between'>
      <Navbar />
      <div className="main px-6 lg:px-16 py-6 lg:py-16 grow order-2">
        <Header userName="Jennifer" />
        
        
      </div>
      <UserPanel />
    </div>
  )
}
