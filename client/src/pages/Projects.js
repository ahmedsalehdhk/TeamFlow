import { useState, useEffect } from 'react';

// components
import Navbar from '../components/Navbar'
import UserPanel from '../components/UserPanel'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      const responseProject = await fetch('/api/projects/')  
      const json = await responseProject.json()

      if(responseProject.ok){
        setProjects(json)
      }
    }
    // calling the function
    fetchProjects()
  }, [])

  return (
    <div className='flex flex-col lg:flex-row h-screen justify-between'>
      <Navbar />
      <div className="main px-6 lg:px-16 py-6 lg:py-16 grow order-2">
        <Header userName="Jennifer" />
        <div className="projects flex flex-col gap-3 bg-red-">
          <p className='text-lg mb-5'>All Projects</p>
        {
          projects && projects.map((project, index) => {
            return (<ProjectCard key={index} project={project}/>)
          })
        }
        </div>
      </div>
      <UserPanel />
    </div>
  )
}
