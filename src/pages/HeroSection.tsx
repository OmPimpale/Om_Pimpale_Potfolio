import { ChevronRight, Code } from "lucide-react";
import { motion } from "motion/react";
import PlaneBtn from "../shared/PlaneBtn";
import ColoredBtn from "../shared/ColoredBtn";
import userImage from "../assets/User.jpg";
// import { useState } from "react";

const HeroSection = () => {
    // const [activeSection, setActiveSection] = useState('hero');

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="flex items-center justify-center relative overflow-hidden py-20 pt-40 dark:bg-dark-slate">
                {/* Background Pattern */}
                {/* <div className="absolute inset-0 bg-gradient-to-bl from-blue-300/50 via-white to-purple-300/50 dark:bg-dark-slate"> */}
                {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div> */}
                {/* </div> */}

                <div className="absolute top-[45%] left-[20%]">
                    <svg width="20" height="20" viewBox="0 0 100 100" className="animate-bounce duration-200">
                        <circle cx="50" cy="50" r="40" stroke="#" strokeWidth="5" fill="#10b981"
                        ></circle>
                    </svg>
                </div>
                <div className="absolute bottom-[10%] right-1/2">
                    <svg width="48" height="48" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" stroke="#8b5cf6" strokeWidth="4" fill="none" opacity="0.6"                        >
                            <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="50" cy="50" r="20" stroke="#8b5cf6" strokeWidth="4" fill="none">
                            <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
                <div className="absolute top-[28%] right-32">
                    <svg width="32" height="32" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#2563eb" strokeWidth="5" fill="none"
                        >
                            <animate attributeName="r" values="35;40;35" dur="1.5s" repeatCount="indefinite"
                            />
                            <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite"
                            />
                        </circle>
                    </svg>
                </div>

                <div className="lg:grid grid-cols-5 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-dark-slate dark:text-white mb-6">
                                Hello, I'm{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    Om Pimpale
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray text-medium-gray dark:text-gray-300 font-body mb-8 max-w-3xl mx-auto">
                                Frontend Developer & Java Enthusiast dedicated to building seamless, performant, and scalable web applications using React, TypeScript, and Spring Boot.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        >
                            <ColoredBtn
                                text={"Get In Touch"}
                                icon={<ChevronRight className="h-4 w-4" />}
                                link="#contact"
                            />
                            <PlaneBtn
                                text={"View Project"}
                                icon={<Code className="h-4 w-4" />}
                                link="#projects"
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="col-span-2 mt-10 lg:mt-0 rounded-xl"
                    >
                        <img
                            className="rounded-xl shadow-xl"
                            src={userImage} alt="User"
                        />
                    </motion.div>
                </div>
            </section >
        </>
    )
}

export default HeroSection;