import React from 'react'
import Image from 'next/image'
import {assets} from '../../assets/assets.js'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div>
            <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
            Hi! I'm Ouali Ould Braham 
            <Image src={assets.hand_icon} alt="" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:test-[66px] ">
            Full Stack Web Developer
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo">
            I’m a junior Full Stack Web Developer based in Montreal, passionate about creating responsive and user-friendly web applications. I work on both frontend and backend development and also handle application deployment to deliver complete and production-ready solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a href="#contact" className="px-10 py-3 border rounded-white rounded-full bg-black text-white flex items-center gap-2"> 
                Contact me 
                <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
            <a href="#sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
                My Resume 
                <Image src={assets.download_icon} alt="" className="w-4" />
            </a>
        </div>
    </div>
  )
}

export default Header