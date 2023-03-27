import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function MainHeader({ isLightMode }) {
  return (
    <section className='flex flex-col md:max-w-[600px] h-[80vh] md:h-[100vh]'>
        <p className='mt-[100px] md:mt-[50px] text-red-500 tracking-wide text-[1.1rem]'>Hola<span className={`${isLightMode ? 'text-blue-900' : 'text-blue-200'} font-bold`}>!</span> my name is</p>
        <h1 className={`mt-5 font-bold ${isLightMode ? 'text-slate-700' : 'text-white'} tracking-wider text-[2rem] md:text-[3rem] font-alkatra`}>
            <span className={`${isLightMode ? 'text-red-600' : 'text-blue-200'}`}>Ayo</span>mide Ibiteye
        </h1>
        <h1  className={`mt-5 font-bold ${isLightMode ? 'text-slate-700' : 'text-white'} tracking-wider text-[2rem] md:text-[3rem] font-alkatra flex flex-col`}>
           <span>I'm a Web</span> <span className={`${isLightMode ? 'text-red-600' : 'text-blue-200'}`}> Developer</span>
        </h1>
        <p className={`${isLightMode ? 'text-slate-700' : 'text-gray-400'}  mt-10 font-Sriracha`}>
            Welcome to my corner of the internet! I'm a web developer with a passion for crafting clean and efficient code, and a love for all things tech. When I'm not busy building websites and applications, you can find me tinkering with new programming languages or daydreaming about my next big project. Thanks for stopping by!
        </p>
        <a className='mt-10 text-red-500 flex items-center w-[170px] hover:text-white active:text-white hover:bg-red-500 active:bg-red-500 text-[1rem] border-2 border-red-500 p-2 rounded-sm tracking-wide transition duration-150 ease-in' href={`Ayomide's Resume.pdf`} download>
            View Resume <span className='ml-3'><FaArrowRight /></span>
        </a>
    </section>
  )
}
