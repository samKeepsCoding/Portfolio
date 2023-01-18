import React from 'react'

// Icon Imports
import { IoLogoJavascript } from 'react-icons/io5'


const SkillCard = () => {
  return (
    <>
        <div className='flex items-center justify-center rounded-full border p-2 cursor-pointer hover:scale-125 ease-in-out duration-100'>
            <IoLogoJavascript size={80}/>
        </div>
    </>
  )
}

export default SkillCard