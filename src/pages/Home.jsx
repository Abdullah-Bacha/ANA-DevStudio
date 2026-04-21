import React, { useState, useEffect } from 'react';
import blog from '../assets/blog-1.png';
import groupe from '../assets/groupe.jpg';
import closeUp from '../assets/close-up.jpg';

import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

export default function Home() {

    const [currentSlide, setCurrentSlide] = useState(0);

   const slides = [
    {
        img: blog,
        BusinessCategory: "Business Consulting Agency",
        title: "Digital Innovation",
        desc: "We build future-ready digital solutions for your brand and business, focusing on performance, scalability, and modern user experience."
    },
    {
        img: groupe,
        BusinessCategory: "Business Consulting Agency",
        title: "Creative Strategy",
        desc: "Empowering businesses with modern creative thinking, strategic planning, and innovative solutions that drive growth and market success."
    },
    {
        img: closeUp,
        BusinessCategory: "Business Consulting Agency",
        title: "Tech Excellence",
        desc: "Transforming complex ideas into robust digital reality with innovative technologies, smart systems, and scalable business solutions."
    }
];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
<section className="relative h-[85vh] md:h-[90vh] lg:h-[95vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'}`}
                >
                    <img src={slide.img} className="w-full h-full object-cover" />

                    <div className="absolute inset-0 bg-black/50 flex items-center px-10">
                        <div className="text-white max-w-2xl">

                            <span className="text-white font-medium text-md pb-10 mb-5 block">
                                {slide.BusinessCategory}
                            </span>

                            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                                {slide.title}
                            </h1>

                            <p className="mb-8 text-gray-300 font-medium">
                                {slide.desc}
                            </p>

                            <div className="flex gap-4">

                                <button className="relative overflow-hidden group px-6 py-3 rounded-md bg-red-600 text-white font-semibold">
                                    <span className="absolute top-0 left-0 w-full h-0 bg-black/80 transition-all duration-300 group-hover:h-full"></span>
                                    <span className="relative z-10">Get Started</span>
                                </button>

                                <button className="flex items-center gap-3 px-5 py-2 rounded-full border-white/50 hover:bg-white hover:text-black transition-all group">
                                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                                        <FaPlay size={12} />
                                    </span>

                                    <span className="text-sm font-semibold">
                                        Play Video
                                    </span>
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            ))}

            {/* ARROWS */}
            <button onClick={prevSlide} className="absolute left-5 top-1/2 -translate-y-1/2 text-white">
                <FaChevronLeft size={25} />
            </button>

            <button onClick={nextSlide} className="absolute right-5 top-1/2 -translate-y-1/2 text-white">
                <FaChevronRight size={25} />
            </button>

        </section>
    );
}