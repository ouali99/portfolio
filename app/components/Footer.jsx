import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage();
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt="" className='w-36 m-auto mb-2 block dark:hidden'/>
            <Image src={assets.logo_dark} alt="" className='w-36 m-auto mb-2 hidden dark:block'/>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt="" className='w-6'/>
                ouali.ouldbraham2@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>©{new Date().getFullYear()} Ouali Ould Braham. {t.footer.rights}</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/ouali99">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/ouali-ould-braham-b2143631a">LinkedIn</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
