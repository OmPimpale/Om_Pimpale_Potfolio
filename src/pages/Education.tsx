import { motion } from 'motion/react'
import { education } from '../userData/educationData';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <>
            {/* Education Section */}
            <section id="education" className="py-20 bg-gray-100/80 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-body text-dark-slate dark:text-white mb-4">
                            Education
                        </h2>
                        <p className="text-xl font-body text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            My academic journey and continuous learning path
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                        <div className='absolute w-full'>
                            <div className='relative top-0 left-3/4'>
                                <svg width="48" height="48" viewBox="0 0 100 100" className='animate-bounce'>
                                    <circle cx="50" cy="50" r="30" stroke="#8b5cf6" strokeWidth="4" fill="none" opacity="0.6"                       >
                                    </circle>
                                    <circle cx="50" cy="50" r="20" stroke="#8b5cf6" strokeWidth="4" fill="none">
                                    </circle>
                                </svg>
                            </div>
                        </div>
                        {education.map((item, index) => {
                            const isEven = index % 2 === 0;
                            const flexDirection = isEven ? 'md:flex-row' : 'md:flex-row-reverse';
                            const paddingClass = isEven ? 'md:pr-8' : 'md:pl-8';
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    // viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row ${flexDirection} items-start md:items-center mb-12`}
                                >
                                    <div className={`md:w-1/2  ${paddingClass}`}>
                                        <div className="bg-white dark:bg-gray-800 rounded-xl dark:shadow-black/70 dark:shadow-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                            <div className="flex items-center justify-center md:justify-start mb-4">
                                                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                                                <span className="text-sm font-medium text-blue-600 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full font-tech">
                                                    {item.date}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold font-heading text-dark-slate dark:text-white mb-2">
                                                {item.qualification}
                                            </h3>
                                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-3">
                                                {item.institute}
                                            </p>
                                            <p className="text-medium-gray font-body dark:text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                                </motion.div>
                            )
                        })}

                        <div className='absolute w-full text-yellow-500'>
                            <div className='relative top-0 left-1/4'>
                                <svg width="48" height="48" viewBox="0 0 100 100" className='animate-ping duration-300 ease-linear'>
                                    <circle cx="50" cy="50" r="30" stroke=" #eab308" strokeWidth="4" fill="none" opacity="0.6"                       >
                                    </circle>
                                    <circle cx="50" cy="50" r="20" stroke=" #facc15" strokeWidth="4" fill="none">
                                    </circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education;