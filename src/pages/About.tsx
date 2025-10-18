import { Briefcase, GraduationCap, MapPin, User, Zap } from "lucide-react";
import { motion } from "motion/react";
import { myData } from "../userData/aboutData";
import PlaneBtn from "../shared/PlaneBtn";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100/80 dark:bg-gray-900">
        {myData.map((data, index) => (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative lg:col-span-2"
              >
                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl dark:shadow-black/70 dark:shadow-lg">
                  <div className="flex items-center mb-6">
                    <User className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                      Quick Info
                    </h3>
                  </div>
                  <div className="space-y-4 font-body">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {data.location}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {data.experience}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {data.education}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {data.avilibility}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[20%] left-[78%]">
                  <div className="absolute -top-2 -left-1 z-50">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 100 100"
                      className="animate-pulse duration-75"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="10"
                        stroke="#8b5cf6"
                        strokeWidth="4"
                        fill="#none"
                        opacity="0.4"
                      ></circle>
                      <circle
                        cx="50"
                        cy="50"
                        r="1"
                        stroke="#8b5cf6"
                        strokeWidth="4"
                        fill="#8b5cf6"
                        opacity="0.4"
                      ></circle>
                    </svg>
                  </div>
                  <div className="absolute top-3 -left-3 z-50">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 100 100"
                      className="animate-pulse duration-75"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="20"
                        stroke="#8b5cf6"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.6"
                      ></circle>
                      <circle
                        cx="50"
                        cy="50"
                        r="10"
                        stroke="#8b5cf6"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.4"
                      ></circle>
                    </svg>
                  </div>
                  <div className="absolute top-1 left-5 z-50">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 100 100"
                      className="animate-pulse duration-75"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="30"
                        stroke="#8b5cf6"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.8"
                      ></circle>
                      <circle
                        cx="50"
                        cy="50"
                        r="20"
                        stroke="#8b5cf6"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.6"
                      ></circle>
                      <circle
                        cx="50"
                        cy="50"
                        r="10"
                        stroke="#8b5cf6"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.4"
                      ></circle>
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="prose prose-lg dark:prose-invert max-w-none font-body">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {data.about.aboutPara1}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-4"
                >
                  {data.contact.map((info, index) => (
                    <PlaneBtn
                      key={index}
                      text={info.text}
                      icon={<info.icon className=" h-4 w-4" />}
                      link={info.link}
                      target="_blank"
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default About;
