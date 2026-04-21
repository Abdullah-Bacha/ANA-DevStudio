import React from 'react';
import Header from '../components/layout/Header';
import Footer from './Footor';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import sectionBg from '../assets/section.png';
import heroBg from '../assets/business.jpg'; // Using business.jpg for a professional background
import { FaArrowRight, FaCheckCircle, FaLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';

export default function GenericPage({ title }) {
    // Determine some specific content based on the title keywords
    const isDemo = title.toLowerCase().includes('demo');
    const isService = title.toLowerCase().includes('service');
    const isBlog = title.toLowerCase().includes('blog');

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                {/* HERO SECTION / BREADCRUMB */}
                <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                    {/* Background with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={heroBg} 
                            alt="Background" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#03041c]/80 backdrop-blur-sm"></div>
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center justify-center md:justify-start gap-2 mb-4"
                        >
                            <img src={sectionBg} alt="Icon" className="w-5 h-5 brightness-0 invert" />
                            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">
                                {isDemo ? 'Solutions' : isService ? 'Services' : isBlog ? 'Journal' : 'Page'}
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                        >
                            {title}
                        </motion.h1>

                        {/* Breadcrumbs */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center justify-center md:justify-start gap-3 text-gray-300 text-sm font-medium"
                        >
                            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
                            <span className="text-red-600">•</span>
                            <span className="text-white">{title}</span>
                        </motion.div>
                    </div>
                </section>

                {/* CONTENT SECTION */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            
                            {/* Left Side: Text Content */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <img src={sectionBg} alt="Icon" className="w-6 h-6" />
                                    <p className="text-red-600 font-bold uppercase tracking-wide">
                                        Exploration
                                    </p>
                                </div>
                                
                                <h2 className="text-3xl md:text-4xl font-bold text-[#03041c] mb-6 leading-tight">
                                    Welcome to our <br /> {title} Portal
                                </h2>
                                
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    We are currently refining the experience for <strong>{title}</strong>. 
                                    Our team is working diligently to bring you cutting-edge insights and 
                                    comprehensive solutions tailored to your business needs. 
                                    Stay tuned for more updates and interactive features.
                                </p>

                                <div className="space-y-4 mb-10">
                                    {[
                                        'Comprehensive Industry Analysis',
                                        'Expert Consultation Services',
                                        'Strategic Business Growth Planning',
                                        'Innovative Technology Integration'
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <FaCheckCircle className="text-red-600 shrink-0" />
                                            <span className="text-[#03041c] font-semibold">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link 
                                    to="/contact" 
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-md hover:bg-[#03041c] transition-all duration-300 group"
                                >
                                    Get Started Now
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>

                            {/* Right Side: Visual Elements */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="space-y-4">
                                    <div className="bg-[#fdf8f3] p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                                        <FaLightbulb size={40} className="text-red-600 mb-4" />
                                        <h3 className="font-bold text-[#03041c] mb-2">Innovation</h3>
                                        <p className="text-xs text-gray-500">Developing future-ready strategies for your brand.</p>
                                    </div>
                                    <div className="bg-[#03041c] p-8 rounded-2xl text-white flex flex-col items-center text-center">
                                        <FaRocket size={40} className="text-red-600 mb-4" />
                                        <h3 className="font-bold mb-2">Efficiency</h3>
                                        <p className="text-xs text-gray-300">Streamlining operations for maximum impact.</p>
                                    </div>
                                </div>
                                <div className="pt-8">
                                    <div className="bg-[#fdf8f3] p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center h-full justify-center">
                                        <FaShieldAlt size={40} className="text-red-600 mb-4" />
                                        <h3 className="font-bold text-[#03041c] mb-2">Reliability</h3>
                                        <p className="text-xs text-gray-500">Trusted by thousands of global enterprises.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
