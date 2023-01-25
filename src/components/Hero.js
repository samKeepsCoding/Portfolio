import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

// Component Imports
import Navbar from './Navbar'


const Hero = () => {


  return (
    <>
    <div className='md:h-screen w-full max-w-7xl' id='home'>
        
        <div className='flex flex-col justify-center items-start mt-[12rem] w-full max-w-7xl px-16'>
            <div className='flex flex-col text-start'>
                <TypeWriterEffect
                    textS
                />
                <p className='text-green-300 text-sm'>Hi, my name is</p>
                <h1 className='text-7xl text-slate-100 font-extrabold mt-3 uppercase'>Samuel Harris.</h1>
                <h2 className='text-4xl lg:text-6xl font-extrabold mt-2 uppercase'>I build things for the web</h2>
                <p className='mt-6 max-w-[45rem] text-xs md:text-base'>I am a self taught Junior Software Engineer specializing in creating engaging and user-friendly web applications. I'm focused and excited to start my professional career and work on projects that wil challenge me and help me grow as a developer.</p>
            </div>
            <a href="https://github.com/samKeepsCoding?tab=repositories">
                <button className='border-[0.3px] border-green-300 text-green-300 rounded-md px-4 py-4 mt-8 hover:bg-green-300 hover:text-slate-900 duration-100 ease-linear'>
                        Check Out My Github
                </button>
            </a>
        </div>
    </div>
    </>
  )
}

export default Hero