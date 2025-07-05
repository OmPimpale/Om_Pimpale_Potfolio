import { Menu, Moon, Sun, Terminal, X } from "lucide-react";
import { navigation } from "../userData/navData";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }: any) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed p-6 top-0 left-0 right-0 py-2 z-50"
            >
                <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                </div>

                <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center"
                        >
                            <a href="#" className="flex-shrink-0 flex items-center">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-2 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30"
                                >
                                    <Terminal className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </motion.div>
                                <span className="ml-3 text-xl font-bold font-heading text-dark-slate dark:text-white">
                                    Om P.
                                </span>
                            </a>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="hidden lg:block"
                        >
                            <div className="flex items-center space-x-1 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-1 border border-white/30 dark:border-gray-700/30">
                                {navigation.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        initial={{ y: -50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                        whileHover={{
                                            backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)'
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-dark-slate dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-xl text-sm font-medium font-heading transition-all duration-200 relative overflow-hidden"
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0"
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center space-x-3"
                        >
                            <motion.button
                                onClick={toggleDarkMode}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-gray-300/30 dark:hover:bg-white/20 transition-all duration-200"
                            >
                                <AnimatePresence mode="wait">
                                    {darkMode ? (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Sun className="h-5 w-5 text-yellow-400" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Moon className="h-5 w-5 text-dark-slate" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            {/* Mobile menu button */}
                            <div className="lg:hidden">
                                <motion.button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200"
                                >
                                    <AnimatePresence mode="wait">
                                        {isMenuOpen ? (
                                            <motion.div
                                                key="x"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{ rotate: 90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: -90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -20 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="md:hidden relative"
                        >
                            <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/30">
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5"></div>
                            </div>
                            <div className="relative px-4 py-3 space-y-1">
                                {navigation.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -50, opacity: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{
                                            scale: 1.02,
                                            backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)'
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 relative overflow-hidden"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="relative z-10">{item.name}</span>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0"
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    )
}

export default Navbar;