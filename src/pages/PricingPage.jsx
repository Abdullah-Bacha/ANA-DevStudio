import React from 'react';
import Header from '../components/layout/Header';
import Footer from './Footor';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import sectionBg from '../assets/section.png';

export default function PricingPage() {
    const plans = [
        {
            name: "Basic Plan",
            price: "29",
            features: ["Business Consulting", "Financial Investment", "IT Solutions", "24/7 Support"],
            notIncluded: ["Tax Consulting", "Market Research"],
            recommended: false
        },
        {
            name: "Standard Plan",
            price: "59",
            features: ["Business Consulting", "Financial Investment", "IT Solutions", "Tax Consulting", "24/7 Support"],
            notIncluded: ["Market Research"],
            recommended: true
        },
        {
            name: "Premium Plan",
            price: "99",
            features: ["Business Consulting", "Financial Investment", "IT Solutions", "Tax Consulting", "Market Research", "24/7 Support"],
            notIncluded: [],
            recommended: false
        }
    ];

    return (
        <div className="bg-white">
            <Header />
            {/* Hero */}
            <section className="bg-[#03041c] pt-48 pb-24 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Pricing Plans</h1>
                <p className="text-gray-400">Choose the best plan for your business growth</p>
            </section>

            {/* Pricing Table */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-2xl border-2 ${plan.recommended ? 'border-red-600 shadow-2xl relative scale-105 z-10' : 'border-gray-100'}`}
                        >
                            {plan.recommended && (
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                                    Recommended
                                </span>
                            )}
                            <h3 className="text-2xl font-bold text-[#03041c] mb-4">{plan.name}</h3>
                            <div className="mb-8">
                                <span className="text-4xl font-bold text-[#03041c]">${plan.price}</span>
                                <span className="text-gray-500">/month</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600">
                                        <FaCheck className="text-green-500" /> {f}
                                    </li>
                                ))}
                                {plan.notIncluded.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <FaTimes /> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-4 rounded-md font-bold transition ${plan.recommended ? 'bg-red-600 text-white hover:bg-black' : 'bg-gray-100 text-[#03041c] hover:bg-red-600 hover:text-white'}`}>
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
