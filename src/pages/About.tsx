import { Briefcase, GraduationCap, MapPin, User, Zap } from "lucide-react";
import { motion } from "motion/react";
import { myData } from "../userData/aboutData";
import PlaneBtn from "../shared/PlaneBtn";

const About = () => {
    return (
        <>
            {/* About Section */}
            <section id="about" className="py-20 bg-gray-100/80 dark:bg-gray-900">
                {myData.map((data, index) =>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-slate dark:text-white mb-4">
                                About Me
                            </h2>
                            <p className="text-xl text-medium-gray font-body dark:text-gray-300 max-w-3xl mx-auto">
                                {data.discription}
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-5 gap-8 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative lg:col-span-2"
                            >
                                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                                    <div className="flex items-center mb-6">
                                        <User className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                                        <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                                            Quick Info
                                        </h3>
                                    </div>
                                    <div className="space-y-4 font-body">
                                        <div className="flex items-center">
                                            <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                                            <span className="text-gray-600 dark:text-gray-300">{data.location}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                                            <span className="text-gray-600 dark:text-gray-300">{data.experience}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <GraduationCap className="h-5 w-5 text-gray-400 mr-3" />
                                            <span className="text-gray-600 dark:text-gray-300">{data.education}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Zap className="h-5 w-5 text-gray-400 mr-3" />
                                            <span className="text-gray-600 dark:text-gray-300">{data.avilibility}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-3"
                            >
                                <div className="prose prose-lg dark:prose-invert max-w-none font-body">
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        {data.about.aboutPara1}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        {data.about.aboutPara2}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                                        {data.about.aboutPara3}
                                    </p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-4">
                                    {data.contact.map((info, index) =>
                                        <PlaneBtn
                                            key={index}
                                            text={info.text}
                                            icon={info.icon}
                                            link={info.link}
                                        />
                                    )}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default About;