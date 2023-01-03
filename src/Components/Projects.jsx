import React from 'react'
import { myProjects } from './myProjects'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";
import { FaGithub, FaLink } from 'react-icons/fa';

export default function Projects({ isLightMode, width }) {
  return (
    <section className='min-h-screen pt-[100px] pb-[100px]'>
        <h2 className={`${isLightMode ? 'text-slate-700' : 'text-white'} text-[2rem] font-bold tracking-wide`}>
            My <span className={`${isLightMode ? 'text-red-600' : 'text-blue-200'}`}>Projects</span>
        </h2>
        {
            width < 1024 ?
            <div className='mt-10 flex flex-col items-center md:grid md:grid-cols-2'>
            {myProjects.map(project=>{
                const projectStyle = {
                    backgroundImage: `url(${project.img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    filter: 'brightness(40%)'
                }
                return (
                    <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} key={project.id}>
                        <div className='rounded-lg mb-[100px] md:mb-[50px] p-5'>
                            <div style={projectStyle} className='rounded-lg h-[300px] w-[300px]'></div>
                            <div className='absolute top-[30px] w-[300px] p-3'>
                                <p className='text-blue-300 font-semi-bold text-sm'>Personal Project</p>
                                <p className='text-blue-300 font-bold mt-6 text-[1.5rem]'>{project.name}</p>
                                <p className='text-white mt-5'>{project.description}</p>
                                <div className='flex mt-6 w-[70px] justify-between'>
                                        <a href={project.github} target="_blank" className='text-white text-[1.3rem] hover:bg-white rounded-full p-1 hover:text-black'>
                                            <FaGithub />
                                        </a>
                                        <a href={project.url} target="_blank" className='text-white text-[1.3rem] hover:bg-white rounded-full p-1 hover:text-black'>
                                            <FaLink />
                                        </a>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                )
            })}
        </div> : 
        <div className='mt-10'>
            {myProjects.map((project, index)=>{
                const projectStyle = {
                    backgroundImage: `url(${project.img})`,
                    backgroundPositionX: 'center',
                    backgroundSize: 'cover',
                    // filter: 'brightness(40%)'
                }
                return (
                    <div className='' key={project.id}>
                       {index % 2 === 0 ? 
                        <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInRight'>
                            <div className='w-full'>
                                <div style={projectStyle} className='w-[70%] h-[300px] project-style rounded-lg'></div>
                                <div className=' w-[50%] h-[100px] flex flex-col items-end relative left-[500px] bottom-[250px]'>
                                    <p className='text-blue-300 '>Personal Project</p>
                                    <p className={`${isLightMode ? 'text-red-500' : 'text-white'} font-bold tracking-wide text-[1.5rem] mb-3`}>{project.name}</p>
                                    <div className='bg-slate-500 p-3 rounded-sm flex flex-col items-end shadow-xl shadow-slate-700'>
                                        <p className='text-gray-300 text-sm text-right'>{project.description}</p>
                                        <div className='flex mt-3 w-[70px] justify-between'>
                                                <a href={project.github} target="_blank" className='text-white text-[1.3rem] hover:bg-white rounded-full p-1 hover:text-black'>
                                                    <FaGithub />
                                                </a>
                                                <a href={project.url} target="_blank" className='text-white text-[1.3rem] hover:bg-white rounded-full p-1 hover:text-black'>
                                                    <FaLink />
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>:
                        <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInLeft'>
                            <div className='w-full mb-[250px]'>
                                <div className='w-[50%] relative top-[250px] z-[9999]'>
                                    <p className='text-blue-300 '>Personal Project</p>
                                    <p className={`${isLightMode ? 'text-red-500' : 'text-white'} font-bold tracking-wide text-[1.5rem] mb-3`}>{project.name}</p>
                                    <div className='bg-slate-500 p-3 rounded-sm flex flex-col items-end shadow-xl shadow-slate-700'>
                                        <p className='text-gray-300 text-sm text-left'>{project.description}</p>
                                        <div className='flex mt-3 w-[70px] justify-between'>
                                                <a href={project.github} target="_blank" className='text-white text-[1.3rem] hover:bg-white rounded-full p-1 hover:text-black'>
                                                    <FaGithub />
                                                </a>
                                                <a href={project.url} target="_blank" className='text-white text-[1.3rem] hover:bg-white rounded-full p-1 hover:text-black'>
                                                    <FaLink />
                                                </a>
                                        </div>
                                    </div>
                                </div>
                                <div style={projectStyle} className='w-[70%] h-[300px] project-style rounded-lg relative left-[300px]'></div>
                            </div>
                        </AnimationOnScroll>
                        } 
                    </div>
                )
            })}
        </div>
        }
    </section>
  )
}
