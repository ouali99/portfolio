import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const Work = () => {
  return (
    <motion.div 
    initial={{ opacity:0,  }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1 }}
    id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <motion.h4 
        initial={{ y: -20, opacity:0,  }}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo">
          My Portfolio
        </motion.h4>

        <motion.h2 
        initial={{ y: -20, opacity:0,  }}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo">
          My latest work
        </motion.h2>

        <motion.p
        initial={{ opacity:0,  }}
        whileInView={{ opacity: 1}}
        transition={{ delay: 0.7, duration: 0.5 }} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Take a look at some of my recent projects, where I applied my skills in full stack development to build responsive, dynamic, and production-ready web applications.
        </motion.p>

      <motion.div 
      initial={{ opacity:0,  }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.6 , delay: 0.9 }}
      className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 my-10'>
        {workData.map((project, index) => (
          <a
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" 
          key={index} 
          style={{backgroundImage: `url(${project.bgImage})`}}>
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                    <Image src={assets.send_icon} alt="send icon" className='w-5'/>
                </div>
            </div>
          
          </a>
        ))}
      </motion.div>
      <motion.a 
      initial={{ opacity:0,  }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.5 , delay: 1.1 }}
      href="" className='w-max flex items-center jus gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500'>
        Show more <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4" />
      </motion.a>
    </motion.div>
  )
}

export default Work