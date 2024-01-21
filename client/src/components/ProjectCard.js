import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className='project-card border rounded-xl bg-[#E1F4FE] px-6 py-4'>
      <h1 className='text-l font-bold'>{props.project.title}</h1>
      <p className='mb-10'>{props.project.description}</p>
      <p className='mb-3'>Appointed:</p>
      <ul className='flex flex-wrap gap-3'>
        {
            props.project.appointedPeople.map((person, index) => {
                return <li className='bg-white px-2 py-1 rounded-full' key={index}>{person}</li>
            })
        }
      </ul>
    </div>
  )
}
