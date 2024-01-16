import React from 'react'
import user from '../assets/user.jpg'

export default function UserPanel() {
  return (
    <div className='user-panel bg-[#E1F4FE] h-24 md:h-screen w-screen md:w-[250px] order-1 md:order-3 flex md:flex-col justify-between items-center py-3 md:py-16 px-6 md:px-10 border-l'>
      <div className="logo md:hidden">
        <h1 className='font-bold text-xl cursor-pointer'>TeamFlow</h1>
      </div>
      <div className="user-profile flex flex-col justify-center items-center">
        <img src={user} className='user-image h-12 md:h-32 w-12 md:w-32 object-cover rounded-full md:mb-5' alt=""/>
        <h2 className='font-bold hidden md:block'>Jennifer</h2>
        <p className='text-neutral-400 hidden md:block'>CEO</p>
      </div>
    </div>
  )
}
