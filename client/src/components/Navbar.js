import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  return (
    <div className='navbar bg-[#E1F4FE] h-screen w-[250px] flex flex-col justify-between items-center py-16 px-10'>
        <div className="logo">
            <h1 className='font-bold text-2xl'>TeamFlow</h1>
        </div>
        <ul className="nav-links flex flex-col gap-4">
            <li className='text-neutral-400 hover:text-black cursor-pointer'>Dashboard</li>
            <li className='text-neutral-400 hover:text-black cursor-pointer'>Projects</li>
            <li className='text-neutral-400 hover:text-black cursor-pointer'>Tasks</li>
            <li className='text-neutral-400 hover:text-black cursor-pointer'>Messages</li>
            <li className='text-neutral-400 hover:text-black cursor-pointer'>Calendar</li>
            <li className='text-neutral-400 hover:text-black cursor-pointer'>Settings</li>
        </ul>
        <div className="logout">
            <button className='border border-black px-6 py-3'>Logout</button>
        </div>
    </div>
  )
}
