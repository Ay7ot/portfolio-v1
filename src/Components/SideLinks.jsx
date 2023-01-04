import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function SideLinks() {
  return (
    <div className='fixed left-0 top-[400px] flex flex-col items-center text-center'>
        <a href='https://github.com/Ay7ot' className='p-3 text-black hover:text-white bg-red-700 w-[50px] h-[50px] text-[1.5rem] text-center'><i><FaGithub /></i></a>
        <a href='https://www.linkedin.com/in/ayomide-ibiteye-b124b823b/' className='p-3 text-black hover:text-white bg-yellow-600 w-[50px] h-[50px] text-[1.5rem]'><FaLinkedin /></a>
        <a href='https://twitter.com/Ay7ot' className='p-3 text-black hover:text-white bg-blue-400 w-[50px] h-[50px] text-[1.5rem]'><FaTwitter /></a>
    </div>
  )
}
