import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegAddressCard, FaProjectDiagram, FaTasks, FaSms, FaCalendar, FaCog } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='navbar bg-[#E1F4FE] h-24 lg:h-screen w-screen lg:w-[250px] order-3 lg:order-1 flex flex-col justify-center lg:justify-between items-center px-6 lg:px-10 py-3 lg:py-16 lg:border-r'>
        <div className="logo hidden lg:block">
            <h1 className='font-bold text-2xl cursor-pointer'>TeamFlow</h1>
        </div>
        <ul className="nav-links w-full flex lg:flex-col justify-evenly lg:justify-center items-center gap-4">
            <Link to={'/dashboard'}><li className='lg:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden lg:block'>Dashboard</p> <FaRegAddressCard className='lg:hidden text-3xl ' /></li></Link>
            <Link to={'/projects'}><li className='lg:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden lg:block'>Projects</p> <FaProjectDiagram  className='lg:hidden text-3xl' /></li></Link>
            <Link to={'/tasks'}><li className='lg:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden lg:block'>Tasks</p> <FaTasks className='lg:hidden text-3xl' /></li></Link>
            <Link to={'/messages'}><li className='lg:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden lg:block'>Messages</p> <FaSms className='lg:hidden text-3xl' /></li></Link>
            <Link to={'/calendar'}><li className='lg:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden lg:block'>Calendar</p> <FaCalendar className='lg:hidden text-3xl' /></li></Link>
            <Link to={'/settings'}><li className='lg:text-neutral-400 hover:text-black cursor-pointer'><p className='hidden lg:block'>Settings</p> <FaCog className='lg:hidden text-3xl' /></li></Link>
        </ul>
        <div className="logout hidden lg:block">
            <button className='px-6 py-3 hover:bg-white rounded hover:font-bold'>Logout</button>
        </div>
    </div>
  )
}
