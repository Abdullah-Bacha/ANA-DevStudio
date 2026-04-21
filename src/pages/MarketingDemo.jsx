import React from 'react';
import Header from '../components/layout/Header';
import Footer from './Footor';
import Portfolio from './Portfolio';
import LatestBlog from './LatestBlog';
import { motion } from 'framer-motion';

export default function MarketingDemo() {
    return (
        <div className="bg-white">
            <Header />
            <section className="py-32 px-6 bg-gradient-to-r from-red-600 to-orange-500 text-white">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black mb-8"
                    >
                        GROW YOUR BRAND
                    </motion.h1>
                    <p className="text-xl max-w-2xl mb-10">Data-driven marketing strategies that deliver real results. We help you scale your business to new heights.</p>
                    <button className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-[#03041c] hover:text-white transition">Start Campaign</button>
                </div>
            </section>
            <Portfolio />
            <LatestBlog />
            <Footer />
        </div>
    );
}
