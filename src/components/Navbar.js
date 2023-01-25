import React, { useState,useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


// Component Imports 
import SideMenu2 from './SideMenu2';

// React Scroll imports
import { Link } from 'react-scroll';

// Icon Imports 
import { HiCodeBracket } from 'react-icons/hi2';
import { RiMenu3Line } from 'react-icons/ri';



const Navbar = () => {

    const [sideMenu, setSideMenu] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [navVisible, setNavVisible] = useState(true);

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
      }

    useEffect(() => {
        const handleScroll = () => {
            
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                setNavVisible(true)
            } else {
                setNavVisible(false)
            }
            setPrevScrollPos(currentScrollPos)
        };


        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos])

    

  return (
    <>


        <motion.nav className={`max-w-9xl w-full p-4 flex flex-row items-center z-30 fixed top-0 bg-slate-900 drop-shadow-md`}
            initial='open'
            animate={navVisible ? 'open' : 'closed'}
            variants={variants}
            transition={{duration: 0.2}} 
        > 
            <Link to="home" smooth={true} className='text-green-300 ml-3 text-xl flex cursor-pointer'>
                <HiCodeBracket size={30} color={'white'}/>
                SamHarris
                <span className='text-white'>.</span>
            </Link>
            <AnimatePresence>
                {sideMenu ? (
                        <SideMenu2 handleSideMenu={value => setSideMenu(value)}/>
                    
                ): null}
            </AnimatePresence>
            <button 
                onClick={() => {setSideMenu(!sideMenu)}}
                className='ml-auto flex md:hidden cursor-pointer' 
            >
                <RiMenu3Line size={35} />
            </button>
            <div className='ml-auto hidden md:flex flex-row items-center '>
                    
                <Link to="about" smooth={true} className='cursor-pointer'>
                    <span className='text-green-300'>01.</span>
                    About
                </Link>
                <Link to="skills" smooth={true} className='cursor-pointer'>
                    <span className='text-green-300 ml-3'>02.</span>
                    Skills
                </Link>
                <Link to="projects" smooth={true} className='cursor-pointer'>
                    <span className='text-green-300 ml-3'>03.</span>
                    Projects
                </Link>
                <Link to="contact" smooth={true} className='cursor-pointer'>
                    <span className='text-green-300 ml-3'>03.</span>
                    Contact
                </Link>
                    

                <button className='border-[0.3px] border-green-300 text-green-300 rounded-md px-4 py-1 ml-6 hover:bg-green-300 hover:text-slate-900 duration-100 ease-linear'>
                    <a href="/">
                        RESUME
                    </a>
                </button>
            </div>
        </motion.nav>

    </>
  )
}

export default Navbar