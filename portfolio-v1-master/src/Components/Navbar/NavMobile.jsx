import React from 'react'
import {  FaBars } from 'react-icons/fa'
import {FaSun, FaMoon} from 'react-icons/fa'

export default function NavMobile({viewNavMobile, changeTheme, isLightMode, width}) {
  return (
    <>
        { width > 1024 ?
            <div className={`px-5 pb-2 w-full flex items-center justify-between fixed top-0 z-[999999] shadow-md shadow-slate-800 ${isLightMode ? 'bg-gray-100' : 'bg-slate-900'}`}>
               <div className='h-[50px] w-[50px] rounded-full'>
                    <img src='myPicture.jpg' className='w-full h-full rounded-full'/>
                </div>
                <ul className='flex mt-10 justify-between w-[400px]'>
                    <li className={`${isLightMode ? 'text-slate-700' : 'text-white'} px-3 py-1 font-semi-bold tracking-wide text-[1.1rem] mb-10 hover:bg-slate-500 hover:text-white rounded-full transition duration-200 ease-in`}><a href='#about'>About</a></li>
                    <li className={`${isLightMode ? 'text-slate-700' : 'text-white'} px-3 py-1 font-semi-bold tracking-wide text-[1.1rem] mb-10 hover:bg-slate-500 hover:text-white rounded-full transition duration-200 ease-in`}><a href='#skills'>Skills</a></li>
                    <li className={`${isLightMode ? 'text-slate-700' : 'text-white'} px-3 py-1 font-semi-bold tracking-wide text-[1.1rem] mb-10 hover:bg-slate-500 hover:text-white rounded-full transition duration-200 ease-in`}><a href='#projects'>Projects</a></li>
                    <li className={`${isLightMode ? 'text-slate-700' : 'text-white'} px-3 py-1 font-semi-bold tracking-wide text-[1.1rem] mb-10 hover:bg-slate-500 hover:text-white rounded-full transition duration-200 ease-in`}><a href='#contact'>Contact</a></li>
                </ul>
                <a className='text-red-500 hover:text-white hover:bg-red-500 text-[1rem] border-2 border-red-500 p-2 rounded-sm tracking-wide transition duration-150 ease-in' href={`Ayomide's Resume.pdf`} download>
                    CV/Resume 
                </a>
                <div className='flex items-center'>
                    <i className={`${isLightMode ? 'text-slate-700' : 'text-white'} text-[1.5rem]`}><FaMoon /></i>
                    <div className={`w-[50px] border-2 ${isLightMode ? 'border-black' : 'border-white'} rounded-full mx-2 p-1 flex ${isLightMode ? 'bg-tranparent' : 'bg-white'}`} onClick={changeTheme}>
                        <div className={`bg-black w-[25px] h-[20px] rounded-full ${isLightMode ? 'invisible' : ''}`}></div>
                        <div className={`bg-yellow-400 w-[25px] h-[20px] rounded-full ${isLightMode ? '' : 'invisible'}`}></div>
                    </div>
                    <i className={`${isLightMode? 'text-yellow-400' : 'text-white'} text-[1.5rem]`}><FaSun /></i>
                </div>
                
            </div> :
            <div className={`px-5 pt-5 pb-2 w-full flex justify-between items-center fixed top-0 z-[9999999] shadow-lg shadow-slate-700 ${isLightMode ? 'bg-gray-100' : 'bg-slate-900'}`}>
                <div className='h-[50px] w-[50px] rounded-full'>
                    <img src='myPicture.jpg' className='w-full h-full rounded-full'/>
                </div>
                <div className='flex items-center'>
                    <i className={`${isLightMode ? 'text-slate-700' : 'text-white'} text-[1.5rem]`}><FaMoon /></i>
                    <div className={`w-[50px] border-2 ${isLightMode ? 'border-black' : 'border-white'} rounded-full mx-2 p-1 flex ${isLightMode ? 'bg-tranparent' : 'bg-white'}`} onClick={changeTheme}>
                        <div className={`bg-black w-[25px] h-[20px] rounded-full ${isLightMode ? 'invisible' : ''}`}></div>
                        <div className={`bg-yellow-400 w-[25px] h-[20px] rounded-full ${isLightMode ? '' : 'invisible'}`}></div>
                    </div>
                    <i className={`${isLightMode? 'text-yellow-400' : 'text-white'} text-[1.5rem]`}><FaSun /></i>
                </div>
                <i className={`${isLightMode ? 'text-slate-700' : 'text-white'} text-3xl`} onClick={viewNavMobile}><FaBars /></i>
          </div>
        }
    </>
  )
}
