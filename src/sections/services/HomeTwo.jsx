import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-01.png';
import {
    FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter,
    FaLinkedin, FaChevronDown
} from 'react-icons/fa';
import mainBg from "../../assets/main.jpg";

export default function HeroSection() {
    const [isSticky, setIsSticky] = useState(false);

    // Scroll logic: > 150px per sticky hoga
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", hasMega: true, items: ["Corporate Demo", "Financial Demo"] },
        { name: "About" },
        { name: "Services", hasMega: true, items: ["Services", "Service Detail"] },
        { name: "Blog", hasMega: true, items: ["Blog", "Blog Details"] },
        { name: "Pages", hasMega: true, items: ["Team", "Appointment"] },
        { name: "Contact" }
    ];

    return (
        <div className="relative min-h-[600px] w-full text-white font-sans overflow-hidden">
            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${mainBg})` }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-red-900/40 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10">
                {/* TOP BAR (Hamesha normal flow mein rahega) */}
                <div className="bg-[#03041c] text-white py-3 px-6 hidden md:block">
                    <div className="max-w-7xl mx-auto flex justify-between items-center text-[13px]">
                        <p className="text-gray-300">Using user feedback to create a million dollar company</p>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt size={12} className="text-red-600" />
                                <span>California, TX 70240</span>
                            </div>
                            <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                                <FaClock size={12} className="text-red-600" />
                                <span>9:00 AM – 8:00 PM</span>
                            </div>
                            <div className="flex gap-3 border-l border-white/20 pl-6">
                                <span>Follow Us :</span>
                                <FaFacebook className="hover:text-red-600 cursor-pointer" />
                                <FaTwitter className="hover:text-red-600 cursor-pointer" />
                                <FaLinkedin className="hover:text-red-600 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* NAVBAR: 150px scroll ke baad fixed aur dark bg */}
                <header className={`w-full z-50 px-6 py-5 transition-all duration-300 ${isSticky
                    ? 'fixed top-0 left-0 bg-[#0a0a0a] shadow-2xl py-3 animate-fadeInDown'
                    : 'relative bg-transparent'
                    }`}>
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <Link to="/">
                            <img src={logo} alt="logo" className="h-10 brightness-0 invert" />
                        </Link>

                        <nav className="hidden lg:flex items-center gap-8 text-sm tracking-widest font-medium">
                            {navLinks.map((link, index) => (
                                <div key={index} className="relative group">
                                    <div className="flex items-center gap-1 hover:text-red-500 transition cursor-pointer">
                                        {link.name}
                                        {link.hasMega && <FaChevronDown className="text-[10px]" />}
                                    </div>

                                    {link.hasMega && (
                                        <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black min-w-[220px] shadow-xl rounded-b z-50">
                                            {link.items.map((item, i) => (
                                                <Link
                                                    key={i}
                                                    to={item === "Services" ? "/services" : "/"}
                                                    className="block px-4 py-2 text-sm hover:bg-red-500 hover:text-white transition"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <button className="bg-[#e32828] hover:bg-black text-white px-8 py-3 rounded-sm font-bold text-xs uppercase tracking-widest transition">
                            Get Started Now
                        </button>
                    </div>
                </header>

                {/* HERO CONTENT */}
                <div className="max-w-2xl mx-auto px-6 pt-20 pb-20 flex flex-col items-center justify-center text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Team Members</h1>
                    <div className="flex items-center gap-2 text-lg font-medium">
                        <Link to="/" className="hover:text-red-500">Home</Link>
                        <span>›</span>
                        <span className="text-gray-300">Team</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
