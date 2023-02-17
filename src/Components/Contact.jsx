import React from 'react'
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { cards } from './contactCards'

export default function Contact({isLightMode}) {
  return (
        <section className='flex flex-col items-center text-center' id='contact'>
            <p className={`${isLightMode? 'text-red-700' : 'text-blue-200'} tracking-wide text-[1.1rem]`}>Want to connect?</p>
            <h2 className={`${isLightMode ? 'text-slate-700' : 'text-white'} text-[2rem] font-bold tracking-wide mt-6`}>
                <span className={`${isLightMode ? 'text-blue-600' : 'text-red-500'}`}>Contact</span> Me
            </h2>
            <p className={`${isLightMode ? 'text-gray-700' : 'text-gray-400'} mt-6 md:mt-0 md:text-[0.9rem] font-Sriracha max-w-[400px]`}>
                Open to new and exciting oportunities in the tech space. I'm Looking forward to connect with like and unlike minds. You can reach out to me and say hi. I'll definitely respond.
            </p>
            <a href='mailto:ayomidotzee@gmail.com'>
                <button className='mt-10 text-red-500 hover:text-white active:text-white hover:bg-red-500 active:bg-red-500 text-[1rem] border-2 border-red-500 p-2 rounded-sm tracking-wide transition duration-150 ease-in'>
                    Send A Message
                </button>
            </a>
            <div className='flex mt-6 w-[200px] justify-between'>
                {cards.map(item=>{
                    return (
                        <a href={item.url} key={item.id} className={`text-lg ${isLightMode ? 'text-red-700' : 'text-blue-200'} ${isLightMode ? 'hover:text-blue-400' : 'hover:text-red-700'}`}>
                        {item.name==='LinkedIn' ? <FaLinkedin /> :item.name === 'GitHub' ? <FaGithub /> : item.name === 'Instagram' ? <FaInstagram /> : item.name === 'Twitter' ? <FaTwitter /> : <></>}  
                        </a>
                    )
                })}
            </div>
        </section>
  )
}
