import React, { useEffect, useState } from 'react'

// components
import Navbar from '../components/Navbar'
import UserPanel from '../components/UserPanel'

export default function Dashboard() {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      const responseProject = await fetch('http://localhost:4000/api/projects')  
      const json = await responseProject.json()

      if(responseProject.ok){
        setProjects(json)
      }
    }
  }, [])
  
  return (
    <div className='flex flex-col md:flex-row h-screen justify-between'>
      <Navbar />
      <div className="main py-16 px-16 grow order-2">Dashboard</div>
      <UserPanel/>
    </div>
  )
}
