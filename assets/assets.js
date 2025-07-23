import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import aws from './aws.png';
import android_studio from './android_studio.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    aws,
    android_studio
};

export const workData = [
    {
        title: 'AI Teccart',
        description: 'AI-powered chatbot assistant for students at Institut Teccart, providing instant answers and useful resources.',
        bgImage: '/work-1.png',
        link: 'https://ai.teccart.qc.ca/',
    },
    {
        title: 'Teccart - Leave & Absence Manager',
        description: 'Web application for managing student absences and leave requests with an intuitive admin dashboard.',
        bgImage: '/work-2.png',
        link: 'https://absences.teccart.qc.ca/',
    },
    {
        title: 'EducLydIA',
        description: 'AI-driven platform for managing courses, grades, and student performance analytics.',
        bgImage: '/work-3.png',
        link: 'https://edu-lydi-ai.vercel.app/',
    },
    {
        title: 'Medical App',
        description: 'SaaS platform for managing medical appointments and consultations, featuring an integrated chat system and AI tools for analyzing medical PDFs and images (ultrasound, X-ray, etc.).',
        bgImage: '/work-4.png',
        link: '',
    },
    {
        title: 'Clone Uber',
        description: 'mobile application that allows users to book rides, track drivers, and manage payments, similar to Uber.',
        bgImage: '/work-5.png',
        link: '',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web app', description: 'Full-stack web development using modern frameworks to build responsive and scalable web applications....', link: '' },
    { icon: assets.mobile_icon, title: 'Deployment (AWS & Vercel)', description: 'Deployment of web applications using AWS and Vercel for reliable, secure, and scalable hosting solutions....', link: '' },
    { icon: assets.ui_icon, title: 'API Integration', description: 'Design and integration of RESTful APIs to enable seamless communication between services....', link: '' },
    { icon: assets.graphics_icon, title: 'Database Management', description: 'Efficient database design and management with SQL and NoSQL solutions for robust backend systems...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, Python, Java, C#, SQL, Dart' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'DEC in Web and Mobile Programming (completed without EUF) • AEC in Web and Mobile Programming' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built 10+ full-stack projects including AI chatbots, booking systems, and management platforms' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git, assets.aws, assets.android_studio
];