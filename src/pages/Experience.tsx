import {
  Calendar,
  Building2,
  Code,
  Trophy,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { experienceData } from "../userData/experienceData";
import { useState } from "react";

const Experience = () => {
  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark-slate dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-medium-gray font-body dark:text-gray-300 max-w-3xl mx-auto">
              My journey through various roles, technologies, and impactful
              projects
            </p>
          </motion.div>

          {/* Zig-Zag Pattern */}
          <div className="space-y-20">
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`lg:grid lg:grid-cols-5 gap-12 items-stretch ${
                  index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Company Information Side */}
                <div
                  className={`col-span-3 ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
                    {/* Company Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-start gap-2">
                        <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        <div>
                          <h3 className="text-xl font-bold font-heading text-dark-slate dark:text-white">
                            {experience.company}
                          </h3>
                          <p className="text-blue-600 font-tech dark:text-blue-400 font-semibold">
                            {experience.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center mb-4">
                      <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-600 font-tech dark:text-gray-300 font-medium">
                        {experience.duration}
                      </span>
                    </div>

                    {/* Role Description */}
                    <p className="text-gray-600 font-body dark:text-gray-300 mb-6 leading-relaxed">
                      {experience.roleDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold font-heading text-dark-slate dark:text-white mb-3 flex items-center">
                        <Code className="h-5 w-5 text-green-500 mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 font-tech bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold font-heading text-dark-slate dark:text-white mb-3 flex items-center">
                        <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-300 font-body text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Project Card Side */}
                <div
                  className={`col-span-2 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  } mt-8 lg:mt-0`}
                >
                  <ExperienceCard projects={experience.project} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

const ExperienceCard = ({
  projects,
}: {
  projects: (typeof experienceData)[0]["project"];
}) => {
  const [currentProject, setCurrentProject] = useState(0);

  const handlePrev = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentProject];

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <img
            src={project.projectImage}
            alt={project.projectTitle}
            className="w-full h-64 object-cover grayscale aspect-video"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <button
            onClick={handlePrev}
            className="absolute bottom-4 left-2 -translate-y-1/2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          </button>
          <button
            onClick={handleNext}
            className="absolute bottom-4 right-2 -translate-y-1/2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          </button>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gray-600/70 backdrop-blur-sm text-white rounded-full text-sm font-medium">
              {project.projectCategory}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="p-6 bg-white dark:bg-gray-900">
        <h3 className="text-xl font-bold font-heading text-dark-slate dark:text-white">
          {project.projectTitle}
        </h3>
        <p className="text-medium-gray font-body dark:text-gray-300 mt-3">
          {project.projectDescription}
        </p>
      </div>
    </div>
  );
};
