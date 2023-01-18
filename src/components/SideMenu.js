import React from 'react'

// Icon Imports
import { RiCloseFill } from 'react-icons/ri'

const SideMenu = ({handleSideMenu}) => {
  return (
    <>
        
        <div className='absolute md:hidden flex items-center justify-center bg-slate-800 right-0 top-0 w-[22rem] h-screen '>
            <nav className='flex flex-col justify-start items-center '>
                <button 
                    onClick={() => handleSideMenu(false)}
                    className='mb-20' 
                >
                    <RiCloseFill size={50} className='fill-green-300'/>
                </button>
                <ul className='space-y-8 text-center'>
                    <li>
                        <a href="#about">
                            <p className='text-green-300'>01.</p>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills">
                            <p className='text-green-300'>02.</p>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <p className='text-green-300'>03.</p>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <p className='text-green-300'>04.</p>
                            Contact
                        </a>
                    </li>
                    <button className='border-[0.3px] border-green-300 text-green-300 rounded-md px-4 py-1 text-xl font-light hover:bg-green-300 hover:text-slate-900 duration-100 ease-linear'>
                        <a href="/">
                            RESUME
                        </a>
                    </button>
                </ul>
            </nav>
        </div>
       
    </>
  )
}

export default SideMenu