import React from 'react'

// Component Imports
import SkillCard from './SkillCard'

// Icon Imports
import { 
    IoLogoReact,
    IoLogoJavascript,
    IoLogoPython,
    IoLogoCss3,
    IoLogoHtml5,
    IoLogoNodejs

} from 'react-icons/io5';
import { 
    SiNextdotjs,
    SiFlask,
    SiExpress,
    SiMongodb,
    SiRedux,
    SiPostgresql 
} from 'react-icons/si'

const Skills = () => {
  return (
    <>
        <div className='h-screen w-full flex flex-col justify-center items-center px-4'>
            <div className='text-2xl w-full max-w-3xl flex items-center mb-8 flex-row-reverse'>
                <h3 className=''> 
                    <span className='text-green-300'>02.</span>
                    SKILLS
                </h3>
                <div className='border-t-[0.1px] w-[350px] mr-6'>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <SkillCard icon={<IoLogoJavascript size={80}/> } name={'JavaScript'}/>
                <SkillCard icon={<IoLogoCss3 size={80}/> } name={'CSS'}/>
                <SkillCard icon={<IoLogoHtml5 size={80}/> } name={'Html'}/>
                <SkillCard icon={<IoLogoReact size={80}/>} name='ReactJs'/>
                <SkillCard icon={<SiNextdotjs size={80}/>} name='NextJs'/>
                <SkillCard icon={<SiRedux size={80}/>} name='Redux'/>
                <SkillCard icon={<IoLogoNodejs size={80}/>} name='NodeJs'/>
                <SkillCard icon={<SiExpress size={80}/>} name='Express'/>
                <SkillCard icon={<IoLogoPython size={80}/>} name='Python'/>
                <SkillCard icon={<SiFlask size={80}/>} name='Flask'/>
                <SkillCard icon={<SiPostgresql size={80}/>} name='SQL'/>
                <SkillCard icon={<SiMongodb size={80}/>} name='MongoDB'/>
                
            </div>
        </div>
    </>
  )
}

export default Skills