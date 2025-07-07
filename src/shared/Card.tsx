import { ExternalLink, Github } from "lucide-react";
import { projects } from "../userData/projectData";
import {motion} from "motion/react";

const Card = () => {
    return (
        <>
            {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-black/70 dark:shadow-md hover:dark:shadow-lg hover:dark:shadow-black/70 transition-shadow duration-300"
                >
                    <div className="relative overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                        className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-end">
                            <div className="p-4 text-white">
                                <div className="flex space-x-2">
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <Github className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <a href={project.liveDemo} target="_blank" className="text-xl font-bold font-heading text-dark-slate dark:text-white underline hover:no-underline hover:text-blue-600 hover:dark:text-purple-600 duration-200 ease-linear">
                            {project.title}
                        </a>
                        <p className="text-medium-gray font-body dark:text-gray-300 mb-4 mt-3">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 font-tech">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </>
    )
}

export default Card;