import React from 'react'
import user from '../assets/user.jpg'

export default function UserPanel(props) {
  return (
    <div className='user-panel bg-[#E1F4FE] h-24 lg:h-screen w-screen lg:w-[250px] order-1 lg:order-3 flex lg:flex-col justify-between items-center py-3 lg:py-16 px-6 lg:px-10 border-l'>
      <div className="logo lg:hidden">
        <h1 className='font-bold text-xl cursor-pointer'>TeamFlow</h1>
      </div>
      <div className="user-profile flex flex-col justify-center items-center">
        <img src={user} className='user-image h-12 lg:h-32 w-12 lg:w-32 object-cover rounded-full lg:mb-5' alt=""/>
        <h2 className='font-bold hidden lg:block'>{props.userName}</h2>
        <p className='text-neutral-400 hidden lg:block'>{props.userPosition}</p>
      </div>
    </div>
  )
}
