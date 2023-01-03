import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function About({ isLightMode }) {
  return (
    <section className='h-screen pt-[150px] md:pt-[200px]' id='about'>
      <h2 className={`${isLightMode ? 'text-slate-700' : 'text-white'} text-[2rem] font-bold tracking-wide`}>
        <span className={`${isLightMode ? 'text-red-600' : 'text-blue-200'}`}>ABOUT </span>ME
      </h2>
      <div className='md:flex mt-10'>
        <div className='md:grid md:grid-cols-2 md:gap-7'>
           <AnimationOnScroll  animateIn='animate__fadeInLeft'>
                <p className={`${isLightMode ? 'text-slate-700' : 'text-white'} text-[1.4rem] md:text-[1.2rem]`}>
                    Hi, my name is Ayomide Ibiteye and I am a problem-solver at heart and thrive in fast-paced, deadline-driven environments. I am highly organized and always strive to deliver high-quality work that meets the needs of my clients.
                </p>
           </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight'>
                <p className={`${isLightMode ? 'text-gray-700' : 'text-gray-400'} mt-6 md:mt-0 md:text-[0.9rem] font-Sriracha`}>
                    In my free time, you can find me exploring new technologies and keeping up with the latest industry news, or tinkering with personal projects to improve my skills.
                    <br /><br />
                    Thank you for considering me for your web development needs. I look forward to the opportunity to work with you and bring your vision to life.
                </p>
            </AnimationOnScroll>
        </div>
        <div></div>
      </div>
    </section>
  )
}
