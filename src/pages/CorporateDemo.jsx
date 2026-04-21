import React from 'react';
import Header from '../components/layout/Header';
import Footer from './Footor';
import About from './About';
import Services from './Services';
import { motion } from 'framer-motion';

export default function CorporateDemo() {
    return (
        <div className="bg-white">
            <Header />
            <section className="h-[90vh] relative flex items-center px-6 overflow-hidden bg-[#03041c]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="text-red-600 font-bold tracking-widest uppercase">Corporate Excellence</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-8">Business Solutions for Professionals</h1>
                        <button className="bg-red-600 text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-[#03041c] transition">
                            Our Strategy
                        </button>
                    </motion.div>
                </div>
            </section>
            <About />
            <Services />
            <Footer />
        </div>
    );
}
