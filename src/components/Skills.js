import React from 'react'

// Component Imports
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <>
        <div className='h-screen w-full flex flex-col justify-center items-center px-4'>
            <div className='text-2xl w-full max-w-3xl flex items-center mb-8 flex-row-reverse'>
                <h3 className=''> 
                    <span className='text-green-300'>02.</span>
                    SKILLS
                </h3>
                <div className='border-t-[0.1px] w-[450px] mr-6'>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
            </div>
        </div>
    </>
  )
}

export default Skills