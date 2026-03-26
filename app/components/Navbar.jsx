import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = React.useState(false);
    const { lang, toggleLang, t } = useLanguage();

    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        const handleScroll = () => {
            if(scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
    </div>

    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
        <a href="#top">
            <Image
              src={assets.logo}
              alt="Logo"
              width={112}
              height={40}
              className="w-28 cursor-pointer mr-14 block dark:hidden"
              priority={true}
            />
            <Image
              src={assets.logo_dark}
              alt="Logo"
              width={112}
              height={40}
              className="w-28 cursor-pointer mr-14 hidden dark:block"
              priority={true}
            />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark border dark:border-white/50 dark:bg-transparent'}`}>
            <li><a className="font-Ovo" href="#top">{t.nav.home}</a></li>
            <li><a className="font-Ovo" href="#about">{t.nav.about}</a></li>
            <li><a className="font-Ovo" href="#services">{t.nav.services}</a></li>
            <li><a className="font-Ovo" href="#work">{t.nav.work}</a></li>
            <li><a className="font-Ovo" href="#contact">{t.nav.contact}</a></li>
        </ul>
        <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggleLang}
              className="px-3 py-1 text-sm font-semibold border border-gray-400 rounded-full hover:bg-gray-100 dark:border-white/40 dark:hover:bg-white/10 transition"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
            <button type="button" onClick={() => setIsDarkMode(prev =>! prev)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6 cursor-pointer pointer-events-none" />
            </button>
            <a href="#contact" className="hidden lg:flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50">
              {t.nav.contact}
              <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />
            </a>
            <button className="block md:hidden ml-3" onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
            </button>
        </div>

        {/**------------------- Mobile Menu------------------*/}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white">
            <div className="absolute right-6 top-6" onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer"/>
            </div>
            <li><a className="font-Ovo" onClick={closeMenu} href="#top">{t.nav.home}</a></li>
            <li><a className="font-Ovo" onClick={closeMenu} href="#about">{t.nav.about}</a></li>
            <li><a className="font-Ovo" onClick={closeMenu} href="#services">{t.nav.services}</a></li>
            <li><a className="font-Ovo" onClick={closeMenu} href="#work">{t.nav.work}</a></li>
            <li><a className="font-Ovo" onClick={closeMenu} href="#contact">{t.nav.contact}</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
