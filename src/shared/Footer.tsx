import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="bg-gray-100/80 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-2">
                            <div className="flex items-center mb-4">
                                <Terminal className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                <span className="ml-2 text-xl font-bold font-heading text-dark-slate dark:text-white">
                                    TechDev
                                </span>
                            </div>
                            <p className="text-medium-gray font-body dark:text-gray-400 mb-6 max-w-md">
                                Full-Stack Developer passionate about creating innovative solutions
                                and building the future of web technology.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                >
                                    <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                >
                                    <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                </a>
                                <a
                                    href="mailto:john.doe@email.com"
                                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                >
                                    <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                </a>
                            </div>
                        </div>

                        {/* <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                        {/* <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Services
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <span className="text-gray-600 dark:text-gray-400">Web Development</span>
                                </li>
                                <li>
                                    <span className="text-gray-600 dark:text-gray-400">Mobile Apps</span>
                                </li>
                                <li>
                                    <span className="text-gray-600 dark:text-gray-400">UI/UX Design</span>
                                </li>
                                <li>
                                    <span className="text-gray-600 dark:text-gray-400">Consulting</span>
                                </li>
                            </ul>
                        </div> */}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col md:flex-row justify-end items-center">
                            <p className="text-medium-gray font-tech dark:text-gray-400 text-sm">
                                &copy; {new Date().getFullYear()} Om Pimpale. All rights reserved.
                            </p>
                            {/* <p className="text-medium-gray font-tech dark:text-gray-400 text-sm mt-2 md:mt-0">
                                Made with ❤️ using React & TypeScript
                            </p> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;