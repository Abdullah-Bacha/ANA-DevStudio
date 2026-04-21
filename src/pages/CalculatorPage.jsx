import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from './Footor';
import { motion } from 'framer-motion';

export default function CalculatorPage() {
    const [amount, setAmount] = useState(1000);
    const [years, setYears] = useState(5);
    const [rate, setRate] = useState(5);

    const interest = (amount * years * rate) / 100;
    const total = parseFloat(amount) + interest;

    return (
        <div className="bg-white">
            <Header />
            <section className="bg-[#03041c] pt-48 pb-24 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Financial Calculator</h1>
                <p className="text-gray-400">Plan your investments with precision</p>
            </section>

            <section className="py-24 max-w-4xl mx-auto px-6">
                <div className="bg-[#fdf8f3] p-10 rounded-2xl shadow-lg border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-[#03041c] font-bold mb-2">Investment Amount ($)</label>
                                <input 
                                    type="number" 
                                    value={amount} 
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full p-4 rounded-md border border-gray-200 focus:border-red-600 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[#03041c] font-bold mb-2">Duration (Years)</label>
                                <input 
                                    type="number" 
                                    value={years} 
                                    onChange={(e) => setYears(e.target.value)}
                                    className="w-full p-4 rounded-md border border-gray-200 focus:border-red-600 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[#03041c] font-bold mb-2">Interest Rate (%)</label>
                                <input 
                                    type="number" 
                                    value={rate} 
                                    onChange={(e) => setRate(e.target.value)}
                                    className="w-full p-4 rounded-md border border-gray-200 focus:border-red-600 outline-none"
                                />
                            </div>
                        </div>

                        <div className="bg-[#03041c] text-white p-8 rounded-xl flex flex-col justify-center text-center">
                            <h3 className="text-xl mb-4">Expected Return</h3>
                            <div className="text-5xl font-bold text-red-600 mb-2">${total.toLocaleString()}</div>
                            <p className="text-gray-400">Total after {years} years</p>
                            
                            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-400">Principal</p>
                                    <p className="font-bold">${parseFloat(amount).toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Interest</p>
                                    <p className="font-bold text-green-500">${interest.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
