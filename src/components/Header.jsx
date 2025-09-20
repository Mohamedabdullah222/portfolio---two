import React from 'react'
import { CiSaveDown2 } from 'react-icons/ci'
import { MdOutlineStickyNote2 } from 'react-icons/md'

const Header = () => {
  return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="./assets/WhatsApp Image 2025-09-18 at 17.18.07_b3699f64-modified.png" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I&apos;m Mohamed Abdullah
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Frontend Web Developer Based In Mansoura.</h1>
            <p className="max-w-2xl mx-auto font-Ovo">I am a Frontend developer based in Mansoura / Egypt with 2 years of experience.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="/assets/Mohamed-Abdullah-Elsayed.pdf" download
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center hover:scale-105 transition duration-500 gap-2 dark:border-transparent">
                    download resume  <CiSaveDown2 className='text-2xl' />

                </a>

                <a href="/assets/Mohamed-Abdullah-Elsayed.pdf" 
                target='__blank'

                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white transition duration-500 dark:bg-transparent dark:text-white">
                    my resume
                    <MdOutlineStickyNote2 className='text-2xl'/>


                </a>
            </div>
        </div>
  )
}

export default Header
