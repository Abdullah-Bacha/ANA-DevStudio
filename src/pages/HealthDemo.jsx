import React from 'react';
import Header from '../components/layout/Header';
import Footer from './Footor';
import { motion } from 'framer-motion';

export default function HealthDemo() {
    return (
        <div className="bg-blue-50">
            <Header />
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-[#03041c] mb-6">Innovative Health Solutions</h1>
                        <p className="text-lg text-gray-600 mb-8">Providing advanced technology and consulting for modern healthcare providers.</p>
                        <ul className="space-y-3 mb-10">
                            {['Patient Management Systems', 'Telehealth Consulting', 'Medical Data Security'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold text-blue-600">✓ {item}</li>
                            ))}
                        </ul>
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-md font-bold hover:bg-black transition">Book Consultation</button>
                    </motion.div>
                    <motion.div 
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={{ opacity: 1, scale: 1 }}
                         className="bg-white p-10 rounded-3xl shadow-xl"
                    >
                        <h3 className="text-2xl font-bold mb-4">Quick Health Check</h3>
                        <p className="text-gray-500 mb-6">Enter your details for a preliminary assessment.</p>
                        <input className="w-full p-4 mb-4 bg-gray-50 rounded" placeholder="Provider Name" />
                        <button className="w-full bg-blue-600 text-white py-4 rounded font-bold">Start Now</button>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
