import React, { useState } from 'react'

// Component Imports 
import SideMenu from './SideMenu'

// Icon Imports 
import { HiCodeBracket } from 'react-icons/hi2' 
import { RiMenu3Line } from 'react-icons/ri'



const Navbar = () => {

    const [sideMenu, setSideMenu] = useState(false)
    

  return (
    <>
        <nav className='max-w-9xl p-4 flex flex-row items-center mt-3 z-0 sticky'>
            <a href="/" className='text-green-300 ml-3 text-xl flex'>
                <HiCodeBracket size={30} color={'white'}/>
                SamHarris
                <span className='text-white'>.</span>
            </a>
            {sideMenu ? (
                <SideMenu handleSideMenu={value => setSideMenu(value)}/>
                
            ): null}
            <button 
                onClick={() => {setSideMenu(!sideMenu)}}
                className='ml-auto flex md:hidden cursor-pointer' 
            >
                <RiMenu3Line size={35} />
            </button>
            <div className='ml-auto hidden md:flex flex-row items-center '>
                <ul >
                    <li>
                        <a href="#about">
                            <span className='text-green-300'>01.</span>
                            About
                        </a>
                        <a href="#skills">
                            <span className='text-green-300 ml-3'>02.</span>
                            Skills
                        </a>
                        <a href="#projects">
                            <span className='text-green-300 ml-3'>03.</span>
                            Projects
                        </a>
                        <a href="#contact">
                            <span className='text-green-300 ml-3'>03.</span>
                            Contact
                        </a>
                    </li>
                </ul>
                <button className='border-[0.3px] border-green-300 text-green-300 rounded-md px-4 py-1 ml-6 hover:bg-green-300 hover:text-slate-900 duration-100 ease-linear'>
                    <a href="/">
                        RESUME
                    </a>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar