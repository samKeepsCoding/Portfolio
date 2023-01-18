import React from 'react'

import Hero from '../assets/LAN_0676.jpg'

const About = () => {
  return (
    <>
        <div className=' w-full flex justify-center items-center p-4 mt-52 md:mt-8 px-8'>

            <div className='flex flex-col md:flex-row space-x-0 md:space-x-9 justify-center items-between max-w-7xl'>
                
            {/* LEFT SIDE */}
                <div className='w-full md:w-1/2 flex flex-col justify-center items-start '>
                    <div className='flex flex-row text-start items-center'>
                        <h3 className='text-2xl'> 
                            <span className='text-green-300'>01.</span>
                            About Me
                        </h3>
                        <div className='border-t-[0.1px] w-[200px] md:w-[450px] ml-6'>
                        </div>
                    </div>
                    <div className='text-start text-sm md:text-base mt-8 max-w-xl space-y-8 font-light'>
                        <p >
                            Hey! My name is Sam and I have a passion for creating visually stunning and user-friendly websites. I have been honing my skills in HTML, CSS, JavaScript and some of the latest technologies like ReactJS, NextJS, NodeJS, ...etc.
                        </p>
                        <p>
                        My passion for technology and design has led me to continuously improve my abilities and stay up-to-date with the latest trends. I am a quick learner and am excited to apply my diverse set of skills in a professional environment. I am eager to start my career in the software development industry and am looking forward to working on projects that will challenge me and help me grow as a developer.
                        </p>
                    </div>
                
                </div>
            {/* RIGHT SIDE */}
                <div className='flex justify-center items-center w-full mt-8 '>
                    <img src={Hero} alt="Hero" className='w-[20rem] h-[30rem] rounded-sm'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default About