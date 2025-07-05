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
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
                </div> */}

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
                                Full-Stack Developer & Tech Enthusiast passionate about creating
                                innovative solutions that make a difference.
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
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;