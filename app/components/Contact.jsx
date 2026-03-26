import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
    const [result, setResult] = useState("");
    const { t } = useLanguage();

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult(t.contact.sending);
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult(t.contact.success);
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[90%_auto]'>
        <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo">
            {t.contact.subtitle}
        </motion.h4>
        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo">
            {t.contact.title}
        </motion.h2>

        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            {t.contact.description}
        </motion.p>

        <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit} action="" className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
                <motion.input
                initial={{ x: -50, opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover dark:border-white/30 dark:text-white dark:placeholder-white/50' type="text" placeholder={t.contact.namePlaceholder} required name='name'/>
                <motion.input
                initial={{ x: 50, opacity: 0 }}
                whileInView={{x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover dark:border-white/30 dark:text-white dark:placeholder-white/50' type="email" placeholder={t.contact.emailPlaceholder} required name='email'/>
            </div>
            <motion.textarea
            initial={{ y: 100, opacity: 0 }}
            whileInView={{y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover dark:border-white/30 dark:text-white dark:placeholder-white/50 mb-6' rows={6} placeholder={t.contact.messagePlaceholder} required name='message'></motion.textarea>

            <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' type='submit'>
            {t.contact.submit} <Image src={assets.right_arrow_white} alt="" className='w-4' />
            </motion.button>

            <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact
