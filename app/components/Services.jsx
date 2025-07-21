import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>

      <p className='test-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        As a Full Stack Developer, I provide end-to-end solutions for building modern and responsive web applications. From crafting elegant frontend interfaces with React and Tailwind CSS, to designing robust backends using Node.js and FastAPI, I help bring ideas to life. I also offer deployment and optimization services to ensure your applications are fast, secure, and ready for production environments like AWS and Vercel.
      </p>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index) => (
          <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500">
            <Image src={icon} alt="" className="w-10" />
              <h3 className='text-lg my-4 test-gray-700'>{title}</h3>
              <p className='text-gray-600 text-sm leadinf-5'>{description}</p>
              <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                Read more <Image src={assets.right_arrow} alt="" className="w-4" />
              </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services