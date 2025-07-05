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

const LandingPage = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
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
                </div>
            </div>
        </>
    )
}

export default LandingPage;