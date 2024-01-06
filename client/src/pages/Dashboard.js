import React from 'react'
import UserProfile from '../components/UserProfile'

export default function Dashboard() {
  return (
    <div className='master-container w-screen h-screen flex flex-col lg:flex-row justify-between bg-[#F1F7FA]'>
      {/* Desktop Navbar */}
      <div className="desktop-navbar h-full min-w-[250px] hidden lg:flex flex-col justify-between items-center py-24 px-10 border-r">
        <h1 className='text-2xl'>TeamFlow</h1>
        <ul className='flex flex-col gap-5'>
          <li className='cursor-pointer'>Dashboard</li>
          <li className='cursor-pointer'>Projects</li>
          <li className='cursor-pointer'>Tasks</li>
          <li className='cursor-pointer'>Calendar</li>
          <li className='cursor-pointer'>Messages</li>
          <li className='cursor-pointer'>Settings</li>
        </ul>
        <button className=''>Logout</button>
      </div>
      {/* Main Area */}
      <div className="main h-full w-full order-2 lg:order-none py-24 px-10">
        {/* Dashboard */}
        <div className="dashboard bg-red- h-full">
          <div className="user-greeting flex justify-between items-center mb-12">
            <h1 className='text-2xl'>Good Morning, Zarif!</h1>
            <p className='date text-xl text-neutral-400'>6th January, 2024</p>
          </div>
          <div className="summary h-64 flex gap-3 overflow-x-auto"> 
            <div className="ongoing-tasks h-full min-w-64 rounded-2xl cursor-pointer bg-blue-200">1</div>
            <div className="ongoing-tasks h-full min-w-64 rounded-2xl cursor-pointer bg-blue-200">2</div>
            <div className="ongoing-tasks h-full min-w-64 rounded-2xl cursor-pointer bg-blue-200">3</div>
          </div>
          
        </div>
      </div>
      {/* Desktop User */}
      <div className="desktop-user h-full min-w-[280px] hidden lg:flex flex-col items-center justify-between border-l py-24 px-10">
        <UserProfile/>
        <div className="notice h-3/5 w-full">
          <h1 className='mb-2'>Notice Board</h1>
          <div className="notice-board border h-full text-green-400">Notice card components go here</div>
        </div>
      </div>
      {/* Mobile User */}
      <div className="mobile-user w-full h-32 lg:hidden order-1 border-b">MOBILE USER INFO</div>
      {/* Mobile Navbar */}
      <div className="mobile-navbar w-full h-24 lg:hidden order-3 border-t">MOBILE NAVBAR</div>
    </div>
  )
}
