import React from 'react'


const SkillCard = ({icon, name}) => {
  return (
    <>
        <div className='flex flex-col items-center justify-center rounded-full border p-3 cursor-pointer hover:scale-125 ease-in-out duration-100'>
            {icon}
            <p className='font-light text-sm'>{name}</p>
        </div>
    </>
  )
}

export default SkillCard