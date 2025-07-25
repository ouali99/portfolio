"use client";
import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import ThemeWrapper from "./ThemeWrapper";


export default function Home() {

  /*const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.theme=== 'dark' ||(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      console.log('Dark mode ON, classes:', document.documentElement.className);
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
      console.log('Dark mode OFF, classes:', document.documentElement.className);
    }
  },[isDarkMode]);*/
  return (
    <ThemeWrapper>
      {({ isDarkMode, setIsDarkMode }) => (
        <>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Header isDarkMode={isDarkMode} />
          <About isDarkMode={isDarkMode} />
          <Services isDarkMode={isDarkMode} />
          <Work isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
        </>
      )}
    </ThemeWrapper>
  );
}
