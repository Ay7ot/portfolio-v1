import React from 'react'
import { FaTimes, FaSun, FaMoon } from 'react-icons/fa'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function ({ viewNavMobile, changeTheme, isLightMode }) {
  return (
    <AnimationOnScroll animateIn='animate__fadeInRight' animateOnce={true}>
        <div className='px-5 pt-5 pb-2 flex flex-col items-center overflow-y-hidden'>
            <div className='flex justify-between items-center w-full'>
                <img src='myPicture.jpg' className='h-[50px] w-[50px] rounded-full'/>
                <i className={`${isLightMode ? 'text-slate-700' : 'text-white'} text-3xl`}  onClick={viewNavMobile}><FaTimes /></i>
            </div>
            <ul className='flex flex-col items-center mt-10'>
                <li className={`${isLightMode ? 'text-slate-700' : 'text-white'} font-bold tracking-wide text-[1.5rem] mb-10`} onClick={viewNavMobile}><a href='#about'>About</a></li>
                <li className={`${isLightMode ? 'text-slate-700' : 'text-white'} font-bold tracking-wide text-[1.5rem] mb-10`} onClick={viewNavMobile}><a href='#skills'>Skills</a></li>
                <li className={`${isLightMode ? 'text-slate-700' : 'text-white'} font-bold tracking-wide text-[1.5rem] mb-10`} onClick={viewNavMobile}><a href='#projects'>Projects</a></li>
                <li className={`${isLightMode ? 'text-slate-700' : 'text-white'} font-bold tracking-wide text-[1.5rem] mb-10`} onClick={viewNavMobile}><a href='#contact'>Contact</a></li>
            </ul>
            <a className='text-red-500 hover:text-white hover:bg-red-500 text-[1.3rem] border-2 border-red-500 p-3 tracking-wide transition duration-200 ease-in' href='myResume.pdf' download>
            CV/Resume 
            </a>
            <div className='flex mt-10 items-center'>
                <i className={`${isLightMode ? 'text-slate-700' : 'text-white'} text-[1.5rem]`}><FaMoon /></i>
                <div className={`w-[50px] border-2 ${isLightMode ? 'border-black' : 'border-white'} rounded-full mx-2 p-1 flex ${isLightMode ? 'bg-tranparent' : 'bg-white'}`} onClick={changeTheme}>
                    <div className={`bg-black w-[25px] h-[20px] rounded-full ${isLightMode ? 'invisible' : ''}`}></div>
                    <div className={`bg-yellow-400 w-[25px] h-[20px] rounded-full ${isLightMode ? '' : 'invisible'}`}></div>
                </div>
                <i className={`${isLightMode? 'text-yellow-400' : 'text-white'} text-[1.5rem]`}><FaSun /></i>
            </div>
        </div>
    </AnimationOnScroll>
  )
}
