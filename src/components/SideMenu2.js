import React from 'react'
import { motion } from 'framer-motion'

// Icon Imports
import { RiCloseFill } from 'react-icons/ri'

const SideMenu2 = ({handleSideMenu}) => {
  return (
    <>
        <motion.div
            className='fixed md:hidden bg-gradient-to-r from-slate-600 to-transparent h-screen left-0 right-0 top-0 bottom-0 z-40'
            onClick={() => handleSideMenu(false)}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, transition: {duration: 0.3 } }}
        >
            <motion.nav 
                className='fixed flex flex-col space-y-7 right-0 w-[26rem] h-screen z-20  bg-slate-800 justify-center items-center'
                initial={{ x:100 }}
                animate={{ x:0 }}
                transition={{ type: "spring", stiffness: 100, duration: 0.2}}
                exit={{ x: '100%', transition: { duration: 0.3 } }}
            >
                <button 
                    type="button"
                    onClick={() => handleSideMenu(false)}
                    className='text-green-300'
                >
                    <RiCloseFill size={50}/>
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
                        <a href="projects">
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
            </motion.nav>
        </motion.div>
    </>
  )
}

export default SideMenu2