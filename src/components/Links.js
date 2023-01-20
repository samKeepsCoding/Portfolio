import React from 'react';

// Icon Imports
import { 
    BsGithub,
    BsLinkedin,
    BsInstagram

} from 'react-icons/bs';


const Links = () => {
  return (
    <>
        <div className='fixed bottom-0 md:right-[5%] lg:right-[10%] hidden md:flex flex-col justify-center items-center z-100 space-y-6'>
            <ul className='space-y-6'>
                <li className='hover:-translate-y-1 hover:text-green-300 ease-linear duration-100 p-1'>
                    <a href="https://github.com/samKeepsCoding">
                        <BsGithub size={27}/>
                    </a>
                </li>
                <li className='hover:-translate-y-1 hover:text-green-300 ease-linear duration-100 p-1'>
                    <a href="https://www.linkedin.com/in/samuel-harris-457756241/">
                        <BsLinkedin size={27}/>
                    </a>
                </li>
                <li className='hover:-translate-y-1 hover:text-green-300 ease-linear duration-100 p-1'>
                    <a href="https://www.instagram.com/">
                        <BsInstagram size={27}/>
                    </a>
                </li>
            </ul>
                <div className='h-[100px] border-r-[0.1px]'>
                    
                </div>
        </div>
    </>
  )
}

export default Links