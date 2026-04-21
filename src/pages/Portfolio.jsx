import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sectionBg from "../assets/section.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

function Portfolio() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev === portfolioData.length - 3 ? 0 : prev + 1));
    const prev = () => setIndex((prev) => (prev === 0 ? portfolioData.length - 3 : prev - 1));

    useEffect(() => {
        const timer = setInterval(next, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full bg-[#cee0f8] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[450px] bg-[#03031b] z-0"></div>
            <div className="relative z-10 pt-16">
                <div className="flex flex-col items-center text-center mb-10 px-4">
                    <div className="flex items-center gap-3 mb-2">
                        <img src={sectionBg} alt="Icon" className="w-6 h-6" />
                        <p className="text-red-600 font-bold uppercase tracking-wide">OUR PORTFOLIO</p>
                    </div>
                    <motion.h1 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-4xl font-bold text-white"
                    >
                        Let's Check Our Best Works
                    </motion.h1>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                    <button onClick={prev} className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full hover:bg-red-600 hover:text-white z-20 shadow-xl cursor-pointer">
                        <FaChevronLeft />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {portfolioData.slice(index, index + 3).map((item, i) => (
                            <Link to={`/project/${item.id}`} key={item.id} className="relative group overflow-hidden shadow-2xl rounded-sm block cursor-pointer">
                                <img src={item.img} alt="portfolio" className="w-full h-[450px] object-cover" />
                                <div className="absolute inset-0 bg-red-600/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-5">
                                    <div className="bg-white p-5 rounded text-center w-full transform scale-90 group-hover:scale-100 transition-all">
                                        <p className="font-bold text-black uppercase hover:text-red-600 transition-colors">{item.text}</p>
                                        <p className="text-xs text-gray-500">{item.subtext}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <button onClick={next} className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full hover:bg-red-600 hover:text-white z-20 shadow-xl cursor-pointer">
                        <FaChevronRight />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-12 pb-16">
                    {portfolioData.slice(0, portfolioData.length - 2).map((_, i) => (
                        <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === index ? "bg-red-600 w-8" : "bg-gray-400 w-2"}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
