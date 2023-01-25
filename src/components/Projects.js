import React from 'react'
import { useState, useEffect } from 'react'
import { client } from '../client'

// Component Imports
import ProjectCard from './ProjectCard'


const Projects = () => {
    const [projectsData, setProjectsData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await client.fetch(`*[_type == 'projectCard']`)
                setProjectsData(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
        
    },[])

  return (
    <>
        <div className='w-full flex flex-col justify-start items-center py-10 px-4' id='projects'>
            <div className='flex flex-row text-start items-center'>
                <h3 className='text-2xl'> 
                    <span className='text-green-300'>03.</span>
                    Some Things I've Built
                </h3>
                <div className='border-t-[0.1px] w-[200px] md:w-[450px] ml-6'>
                </div>
            </div>
            {projectsData && projectsData.map((project, index) => (
                <ProjectCard project={project} index={index} />
                )
            )}
        </div>
    </>
  )
}

export default Projects