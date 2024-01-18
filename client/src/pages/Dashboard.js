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
    <div className='dashboard flex flex-col md:flex-row h-screen justify-between'>
      <Navbar />
      <div className="main px-6 md:px-16 py-6 md:py-16 grow order-2">
        <div className="greeting flex justify-between items-center">
          <h1>Good Morning, Jennifer</h1>
          <h1>Sunday, 25th Nov</h1>
        </div>
      </div>
      <UserPanel/>
    </div>
  )
}
