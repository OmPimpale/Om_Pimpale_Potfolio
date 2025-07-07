import { Send } from 'lucide-react';
import { motion } from 'motion/react';
import ColoredBtn from '../shared/ColoredBtn';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { contactSchema, type ContactFormValues } from '../contactSchema';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        emailjs.init("EiA3EweT9XXASgaHW");
    }, []);

    const initialValues: ContactFormValues = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    };

    const handleSubmit = async (
        values: ContactFormValues,
        { resetForm }: any
    ) => {
        const params = {
            name: values.name,
            email: values.email,
            num: values.phone,
            subject: values.subject,
            message: values.message,
        };

        // Detect system theme
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const baseStyle = {
            minWidth: "250px",
            padding: "12px 16px",
            fontSize: "14px",
            borderRadius: "8px",
            fontFamily: "var(--font-tech)", // Tailwind custom font
            background: isDarkMode ? "#1f2937" : "#93c5fd", // bg-gray-800 / bg-blue-300
            color: isDarkMode ? "#ffffff" : "#1e293b", // text-white / text-heading
        };

        const emailPromise = emailjs.send(
            "service_6sojt7z",
            "template_pjfu4xf",
            params
        );

        toast.promise(
            emailPromise,
            {
                loading: "Sending message...",
                success: "Email sent successfully!",
                error: "Failed to send email. Please try again.",
            },
            {
                style: baseStyle,
                success: {
                    duration: 3000,
                    icon: "📨",
                },
                error: {
                    duration: 4000,
                    icon: "⚠️",
                },
            }
        );

        try {
            await emailPromise;
            resetForm();
        } catch (error) {
            console.error("Email sending failed:", error);
        }
    };

    return (
        <>
            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-slate font-heading dark:text-white mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-xl text-medium-gray font-body dark:text-gray-300 max-w-3xl mx-auto">
                            Have a project in mind or want to collaborate? I'd love to hear from you!
                        </p>
                    </motion.div>

                    <div className="">
                        {/* <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold font-['Montserrat'] text-gray-900 dark:text-white mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4" />
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                            <p className="text-gray-900 dark:text-white">john.doe@email.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4" />
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                            <p className="text-gray-900 dark:text-white">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4" />
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                            <p className="text-gray-900 dark:text-white">New York, USA</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                        Follow Me
                                    </h4>
                                    <div className="flex space-x-4">
                                        <a
                                            href="https://github.com/yourusername"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/yourusername"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                        </a>
                                        <a
                                            href="https://twitter.com/yourusername"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div> */}

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className='max-w-5xl mx-auto'
                        >
                            <Formik
                                initialValues={initialValues}
                                validationSchema={toFormikValidationSchema(contactSchema)}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="bg-white dark:bg-gray-900 rounded-xl p-5 md:p-8 shadow-lg dark:shadow-black/70 dark:shadow-lg"
                                    >
                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium font-body text-dark-slate dark:text-gray-300 mb-2">
                                                    Name *
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-dark-slate font-tech dark:text-white transition-colors duration-200"
                                                    placeholder="Your Name"
                                                    spellCheck="true"
                                                />
                                                <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium font-body text-dark-slate dark:text-gray-300 mb-2">
                                                    Email *
                                                </label>
                                                <Field
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-dark-slate font-tech dark:text-white transition-colors duration-200"
                                                    placeholder="your@email.com"
                                                />
                                                <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium font-body text-dark-slate dark:text-gray-300 mb-2">
                                                    Phone
                                                </label>
                                                <Field
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-dark-slate font-tech dark:text-white transition-colors duration-200"
                                                    placeholder="Your Phone"
                                                    spellCheck="true"
                                                />
                                                <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
                                            </div>
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium font-body text-dark-slate dark:text-gray-300 mb-2">
                                                    Subject *
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-dark-slate font-tech dark:text-white transition-colors duration-200"
                                                    placeholder="Project Discussion"
                                                    spellCheck="true"
                                                />
                                                <ErrorMessage name="subject" component="p" className="text-red-500 text-sm" />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="message" className="block text-sm font-medium font-body text-dark-slate dark:text-gray-300 mb-2">
                                                Message *
                                            </label>
                                            <Field
                                                as="textarea"
                                                id="message"
                                                name="message"
                                                required
                                                rows="5"
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-dark-slate font-tech dark:text-white transition-colors duration-200"
                                                placeholder="Tell me about your project..."
                                                spellCheck="true"
                                            />
                                            <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />
                                        </div>

                                        <div className='flex justify-end'>
                                            <ColoredBtn
                                                text={isSubmitting ? (<svg width="24" height="24" viewBox="0 0 100 100" className="animate-spin" xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="50" />
                                                </svg>) : "Send Message"}
                                                icon={!isSubmitting ? <Send className="h-4 w-4" /> : null}
                                                type="submit"
                                                disabled={isSubmitting}
                                            // className='ml-auto'
                                            />
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;