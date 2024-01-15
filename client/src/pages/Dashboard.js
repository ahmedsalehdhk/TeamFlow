import React, { useEffect, useState } from 'react'

// components
import Navbar from '../components/Navbar'

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
    <div>
      <Navbar />
    </div>
  )
}
