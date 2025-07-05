import { motion } from 'motion/react';
import Card from '../shared/Card';

const Projects = () => {
    return (
        <>
            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-100/80 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-slate dark:text-white mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-medium-gray font-body dark:text-gray-300 max-w-3xl mx-auto">
                            Some of my recent work that I'm proud of
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;