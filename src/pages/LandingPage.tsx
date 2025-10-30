import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../shared/Footer";
import Experience from "./Experience";
import { FileUser } from "lucide-react";
import { motion } from 'motion/react';
import resume from "../assets/resume/Om_Pimpale.pdf";

const LandingPage = () => {

    const [darkMode, setDarkMode] = useState(() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') return true;
        if (stored === 'light') return false;
        return true;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <>
            <div className={`min-h-screen w-[100%] overflow-x-hidden ${darkMode ? 'dark' : ''}`}>
                <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                    <Navbar
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                    <HeroSection />
                    <About />
                    <Experience />
                    <Education />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                    <motion.a
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        href={resume}
                        title="Download Resume"
                        target="_blank"
                    >
                        <FileUser className="text-blue-500 hover:text-blue-700 dark:text-purple-500 hover:dark:text-purple-700 w-12 h-12 fixed bottom-6 right-6 p-3 rounded-full z-50 bg-gray-300/50 dark:bg-white/10 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30 duration-200 ease-linear animate-pulse hover:animate-none"/>
                    </motion.a>
                </div>
            </div>
        </>
    )
}

export default LandingPage;