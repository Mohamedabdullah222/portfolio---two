import React from 'react'
import { services } from '../data/Services'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FaSquareGithub } from 'react-icons/fa6'

const Services = () => {
  return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a frontend developer from Mansoura/ Egypt with 2 years of experience currently seeking new job opportunities.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.id} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition duration-700 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <FaSquareGithub className="text-3xl" />

                        {/* <img src={service.icon} alt="" className="w-10" /> */}
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link}
                         target="_blank" className="flex items-center  gap-1 text-sm mt-5">GitHub more
                          <IoIosArrowRoundForward className='text-2xl ' />
</a>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Services
