import React from 'react'
import Image from 'next/image'
import {assets} from '../../assets/assets.js'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div>
            <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: "spring", stiffness: 100}}>
                <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
            </motion.div> 
        </div>
        <motion.h3 
        initial={{y: -20}} whileInView={{y: 0,opacity: 1}} transition={{duration: 0.6, delay: 0.3}}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
            Hi! I'm Ouali Ould Braham 
            <Image src={assets.hand_icon} alt="" className="w-6" />
        </motion.h3 >
        <motion.h1 
        initial={{y: -30, opacity: 0}} whileInView={{y: 0,opacity: 1}} transition={{duration: 0.8, delay: 0.5}}
        className="text-3xl sm:text-6xl lg:test-[66px] ">
            Full Stack Web Developer
        </motion.h1>
        <motion.p
        initial={{oppacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}}
        className="max-w-2xl mx-auto font-Ovo">
            I’m a junior Full Stack Web Developer based in Montreal, passionate about creating responsive and user-friendly web applications. I work on both frontend and backend development and also handle application deployment to deliver complete and production-ready solutions.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a 
            initial={{y: 30, opacity: 0}} whileInView={{y: 0,opacity: 1}} transition={{duration: 0.6, delay: 1}}
            href="#contact" className="px-10 py-3 border rounded-white rounded-full bg-black text-white flex items-center gap-2"> 
                Contact me 
                <Image src={assets.right_arrow} alt="" className="w-4" />
            </motion.a>
            <motion.a 
            initial={{y: 30, opacity: 0}} whileInView={{y: 0,opacity: 1}} transition={{duration: 0.6, delay: 1}}
            href="/Ouali-CV.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
                My Resume 
                <Image src={assets.download_icon} alt="" className="w-4" />
            </motion.a>
        </div>
    </div>
  )
}

export default Header