import React from 'react'

export default function Header(props) {
  return (
    <div className="header flex flex-col lg:flex-row justify-between lg:items-center mb-12">
        <h1 className='text-xl'>Good Morning, {props.userName}</h1>
        <h1 className='text-neutral-400'>Sunday, 25th Nov</h1>
    </div>
  )
}
