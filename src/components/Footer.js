import React from 'react'

// Icon Imports
import { BiGitBranch } from 'react-icons/bi'

const Footer = () => {
  return (
    <>
            <a href="https://github.com/samKeepsCoding/Portfolio">
                <div className='w-full flex text-center justify-center items-center p-8 cursor-pointer ease-in-out duration-100 hover:text-green-300 text-xs font-thin'>
                    Built By Samuel Harris
                    <BiGitBranch className='ml-1'/>
                </div>
            </a>
    </>
  )
}

export default Footer