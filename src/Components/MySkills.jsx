import React from 'react'
import {skills} from './skills'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";

export default function MySkills({ isLightMode }) {
  return (
    <section className='min-h-screen pt-[150px]' id='skills'>
        <h2 className={`${isLightMode ? 'text-slate-700' : 'text-white'} text-[2rem] font-bold tracking-wide`}>
            My <span className={`${isLightMode ? 'text-red-600' : 'text-blue-200'}`}>Skills</span>
        </h2>
        <p className={`${isLightMode ? 'text-slate-700' : 'text-white'} mt-6`}>These are some technologies I'm familiar with.</p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 w-full mt-6'>
            {skills.map(item=>{
                return (
                   <AnimationOnScroll animateIn='animate__fadeInUp' key={item.id}>
                        <div className='flex flex-col items-center border-2 p-3 rounded-lg border-slate-700 shadow-md shadow-slate-700 transition duration-200 ease-in hover:-translate-y-4'>
                            <img src={item.img} className='h-[80px] w-[80px]'/>
                            <p className={`${isLightMode ? 'text-slate-700' : 'text-white'} mt-3 font-Sriracha`}>{item.name.toUpperCase()}</p>
                        </div>
                   </AnimationOnScroll>
                )
            })}
        </div>
    </section>
  )
}
