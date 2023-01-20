import React from 'react'
import { client } from '../client';
import imageUrlBuilder from "@sanity/image-url";

// Icons
import { BsGithub } from 'react-icons/bs'


const builder = imageUrlBuilder(client);


const ProjectCard = ({project, index}) => {

    const urlFor = (source) => {
        return builder.image(source)
    }
    console.log(project)

  return (
    <>
        <div className={`flex  ${index % 2 === 0 ? 'md:flex-row': 'md:flex-row-reverse'} flex-col justify-center items-center px-16 my-8 max-w-6xl ease-linear duration-100`}>
            {/* Left Side */}
            <div className='w-full md:w-1/2'>
                {project ? (
                    <img 
                        src={urlFor(project.screenshot).url()}
                        className='rounded-md'
                        alt='Project'
                    />
                ): null }
            </div>
            {/* Right Side */}
            <div className={`w-full md:w-1/2 flex flex-col ${index % 2 === 0 ?'md:items-start': 'md:items-end'} items-center jusity-end text-center md:text-end space-y-4 p-4`}>
                <p className='text-green-300 text-sm font-light'>Freatured Project</p>
                {project ? (
                    <>
                        <h4 className='text-3xl'>{project.projectName}</h4>
                        <div className={`bg-slate-800 relative ${index % 2 === 0 ? 'md:left-[-4rem]' : 'md:right-[-4rem]'} mt-8 md:p-4 lg:p-10 rounded-md`}>
                            <p className=' text-sm'>{project.description[0].children[0].text}</p>
                        </div>
                        <div className={`flex flex-row ${index % 2 === 0 ? 'md:justify-start': 'md:justify-end'} justify-center items-center flex-wrap`}>
                            {project.techUsed.map((tech) => (
                                <p className='text-sm m-3 font-thin'>{tech}</p>
                            ))}
                        <a href={project.githubLink} className=' hover:text-green-300'>
                            <BsGithub size={30} />
                        </a>
                        </div>
                    </>

                ): null}
            </div>
        </div>
    </>
  )
}

export default ProjectCard