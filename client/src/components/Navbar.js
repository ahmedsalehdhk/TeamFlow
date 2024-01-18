import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegAddressCard, FaProjectDiagram, FaTasks, FaSms, FaCalendar, FaCog } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='navbar bg-[#E1F4FE] h-24 md:h-screen w-screen md:w-[250px] order-3 md:order-1 flex flex-col justify-center md:justify-between items-center px-6 md:px-10 py-3 md:py-16 md:border-r'>
        <div className="logo hidden md:block">
            <h1 className='font-bold text-2xl cursor-pointer'>TeamFlow</h1>
        </div>
        <ul className="nav-links w-full flex md:flex-col justify-evenly md:justify-center items-center gap-4">
            <Link to={'/dashboard'}><li className='md:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden md:block'>Dashboard</p> <FaRegAddressCard className='md:hidden text-3xl ' /></li></Link>
            <Link to={'/dashboard/projects'}><li className='md:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden md:block'>Projects</p> <FaProjectDiagram  className='md:hidden text-3xl' /></li></Link>
            <Link to={'/dashboard/tasks'}><li className='md:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden md:block'>Tasks</p> <FaTasks className='md:hidden text-3xl' /></li></Link>
            <Link to={'/dashboard/messages'}><li className='md:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden md:block'>Messages</p> <FaSms className='md:hidden text-3xl' /></li></Link>
            <Link to={'/dashboard/calendar'}><li className='md:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden md:block'>Calendar</p> <FaCalendar className='md:hidden text-3xl' /></li></Link>
            <Link to={'/dashboard/settings'}><li className='md:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden md:block'>Settings</p> <FaCog className='md:hidden text-3xl' /></li></Link>
        </ul>
        <div className="logout hidden md:block">
            <button className='px-6 py-3 hover:bg-white rounded hover:font-bold'>Logout</button>
        </div>
    </div>
  )
}
