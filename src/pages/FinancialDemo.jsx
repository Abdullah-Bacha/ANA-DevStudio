import React from 'react';
import Header from '../components/layout/Header';
import Footer from './Footor';
import Faq from './Faq';
import HappyCus from './HappyCus';
import { motion } from 'framer-motion';

export default function FinancialDemo() {
    return (
        <div className="bg-[#fdf8f3]">
            <Header />
            <section className="h-[80vh] flex items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-8xl font-bold text-[#03041c] mb-6">Master Your Finances</h1>
                    <p className="text-xl text-gray-600 mb-10">Strategic investment and wealth management solutions for the modern era.</p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-[#03041c] text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition">Invest Now</button>
                        <button className="border-2 border-[#03041c] text-[#03041c] px-8 py-4 rounded-full font-bold hover:bg-[#03041c] hover:text-white transition">Learn More</button>
                    </div>
                </motion.div>
            </section>
            <HappyCus />
            <Faq />
            <Footer />
        </div>
    );
}
