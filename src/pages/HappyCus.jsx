import React, { useEffect, useRef } from 'react';
import sectionBg from "../assets/section.png";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { statsData } from "../data/testimonials";

const Counter = ({ from, to, suffix }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    
    useEffect(() => {
        if (inView) {
            animate(count, to, { duration: 3.5 });
        }
    }, [count, inView, to]);
    
    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
};

function HappyCus() {

    return (
        <div className="py-20 bg-white">
            {/* HEADER SECTION */}
            <div className="flex flex-col items-center text-center mb-16 px-4">
                <div className="flex items-center gap-3 mb-2">
                    <img src={sectionBg} alt="Icon" className="w-6 h-6" />
                    <p className="text-red-600 font-bold uppercase tracking-wide text-sm">
                        15000 Trusted
                    </p>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#03031b]">
                    Happy Customers
                </h1>
            </div>

            {/* STATIC SEPARATED CIRCLES GRID */}
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 px-6">
                {statsData.map((item, index) => (
                    <motion.div 
                        key={item.id} 
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        {/* Dotted Circle Wrapper */}
                        <div className="w-70 h-70 md:w-56 md:h-56 rounded-full border-3 border-dotted border-gray-300 flex flex-col items-center justify-center bg-white shadow-lg transition-all duration-300 hover:border-red-600 hover:shadow-2xl hover:-translate-y-2">
                            
                            {/* Content Container */}
                            <div className="flex flex-col items-center text-center px-6">
                                {/* NUMBERS */}
                                <h2 className="text-3xl md:text-4xl font-black text-red-600 mb-1">
                                    <Counter from={0} to={item.num} suffix={item.suffix} />
                                </h2>
                                
                                {/* LABELS/TEXT */}
                                <p className="text-[#03031b] text-xs md:text-sm font-semibold uppercase tracking-wider leading-tight">
                                    {item.label}
                                </p>
                            </div>
                        </div>

                        {/* Red Dot Indicator */}
                        <div className="absolute top-5 right-5 w-4 h-4 bg-red-600 rounded-full z-10 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default HappyCus;