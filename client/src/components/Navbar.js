import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar bg-[#E1F4FE] h-24 md:h-screen w-screen md:w-[250px] order-3 md:order-1 flex flex-col justify-between items-center py-3 md:py-16 px-6 md:px-10 border-r'>
        <div className="logo hidden md:block">
            <h1 className='font-bold text-2xl cursor-pointer'>TeamFlow</h1>
        </div>
        <ul className="nav-links hidden md:flex flex-col gap-4">
            <Link to={'/dashboard'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Dashboard</li></Link>
            <Link to={'/dashboard/projects'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Projects</li></Link>
            <Link to={'/dashboard/tasks'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Tasks</li></Link>
            <Link to={'/dashboard/messages'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Messages</li></Link>
            <Link to={'/dashboard/calendar'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Calendar</li></Link>
            <Link to={'/dashboard/settings'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Settings</li></Link>
        </ul>
        <ul className="nav-links flex md:hidden justify-center items-center gap-4">
            <Link to={'/dashboard'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Dashboard</li></Link>
            <Link to={'/dashboard/projects'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Projects</li></Link>
            <Link to={'/dashboard/tasks'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Tasks</li></Link>
            <Link to={'/dashboard/messages'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Messages</li></Link>
            <Link to={'/dashboard/calendar'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Calendar</li></Link>
            <Link to={'/dashboard/settings'}><li className='text-neutral-400 hover:text-black cursor-pointer'>Settings</li></Link>
        </ul>
        <div className="logout hidden md:block">
            <button className='px-6 py-3 hover:bg-white rounded hover:font-bold'>Logout</button>
        </div>
    </div>
  )
}
