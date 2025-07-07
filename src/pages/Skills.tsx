// import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import {motion} from 'framer-motion';
import { skills } from '../userData/skillsData';
// import * as Progress from '@radix-ui/react-progress';
// import { useEffect, useState } from 'react';

const Skills = () => {
    // const MotionIndicator = motion(Progress.Indicator);

    return (
        <>
            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-slate dark:text-white mb-4">
                            Technical Skills
                        </h2>
                        <p className="text-xl text-medium-gray font-body dark:text-gray-300 max-w-3xl mx-auto">
                            Technologies and tools I work with
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg dark:shadow-black/70 dark:shadow-lg hover:dark:shadow-xl hover:dark:shadow-black/70 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold font-body text-gray-900 dark:text-white">
                                        {skill.name}
                                    </h3>
                                    <span className="text-sm font-medium font-tech text-gray-500 dark:text-gray-400">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        // viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => {
                            const progress = useMotionValue(0);
                            const rounded = useTransform(progress, (latest) =>
                                Math.round(latest)
                            );

                            const [displayValue, setDisplayValue] = useState(0);
                            useEffect(() => {
                                const unsubscribe = rounded.on("change", (v) => {
                                    setDisplayValue(v);
                                });

                                const controls = animate(progress, skill.level, {
                                    duration: 1,
                                    delay: index * 0.1,
                                });

                                return () => {
                                    controls.stop();
                                    unsubscribe();
                                };
                            }, []);

                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold font-body text-gray-900 dark:text-white">
                                            {skill.name}
                                        </h3>
                                        <span className="text-sm font-medium font-tech text-gray-500 dark:text-gray-400">
                                            {displayValue}%
                                        </span>
                                    </div>

                                    <Progress.Root
                                        className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-full"
                                        value={skill.level}
                                    >
                                        <MotionIndicator
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                                        />
                                    </Progress.Root>
                                </motion.div>
                            );
                        })}
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Skills;