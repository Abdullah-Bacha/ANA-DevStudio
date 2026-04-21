import logo from '../../assets/AnaLogo.png';
import logo2 from '../../assets/01.jpg';
import { IoClose, IoMenuOutline } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FaMapMarkerAlt,
    FaClock,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaSearch,
    FaChevronDown,
    FaPhoneAlt,
    FaEnvelope
} from 'react-icons/fa';
export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // --- Language State ---
    const [selectedLang, setSelectedLang] = useState({ code: 'EN', name: 'English', flag: 'us' });
    const languages = [
        { code: 'EN', name: 'English', flag: 'us' },
        { code: 'CN', name: 'China', flag: 'cn' },
        { code: 'AR', name: 'Arabic', flag: 'sa' },
        { code: 'PK', name: 'Urdu', flag: 'pk' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        {
            name: "Home",
            hasMega: true,
            items: ["Corporate Demo", "Financial Demo", "Marketing Demo", "Health Demo", "IT Solution Demo", "Business Solutions Demo", "Consulting Demo", "Corporate Solutions Demo"]
        },
        {
            name: "About",
        },
        {
            name: "Services",
            hasMega: true,
            items: ["Services", "Service Detail"]
        },
        {
            name: "Blog",
            hasMega: true,
            items: ["Blog", "Blog Details", "Blog Archive", "Blog Masonry", "Blog Right Sidebar", "Blog Left Sidebar", "Business", "Case Study Blog", "Market Trends"]
        },
        {
            name: "Pages",
            hasMega: true,
            items: ["Team", "Appointment", "Calculator", "Project Sidebar", "Project Details", "Team Detail", "Pricing Plan"]
        },
        {
            name: "Contact",
        }
    ];


    return (
        <div className="relative font-sans bg-white text-gray-800">

            {/* TOP BAR */}
            <div className="bg-[#03041c] text-white py-3 px-6 hidden md:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-[13px]">
                    <p className="text-gray-300">Using user feedback to create a million dollar company</p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt size={12} className="text-red-600" />
                            <span>Lahore, Pakistan</span>
                        </div>
                        <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                            <FaClock size={12} className="text-red-600" />
                            <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
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

            {/* LOGO + SEARCH */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-6">
                    <img src={logo} alt="Logo" className="h-11" />
                    <div className="hidden lg:flex items-center gap-10 flex-1 justify-center px-10">
                        <div>
                            <span className="text-gray-400 text-xs uppercase font-bold">Need Help?</span>
                            <p className="font-bold text-sm text-gray-800 hover:text-red-600 cursor-pointer">Request A Callback</p>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-gray-50 border py-2 px-4 pr-10 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:border-red-600 outline-none"
                            />
                            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                    <button className="hidden md:block bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-black">
                        Get Consulting
                    </button>
                </div>
            </div>

            {/* NAVBAR + LANGUAGE SWITCHER */}
            <div className={`${isSticky ? "fixed top-0 left-0 w-full z-[100] shadow-lg" : "relative"} transition-all duration-300`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 bg-white border-x-4 border-red-600 shadow-lg">

                    <nav className="hidden md:flex gap-8 font-semibold">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">

                                {/* MAIN LINK */}
                                {link.hasMega ? (
                                    <span className="flex items-center gap-1 cursor-pointer text-gray-800 hover:text-red-600 transition-colors duration-300 py-5">
                                        {link.name}
                                        <FaChevronDown
                                            size={15}
                                            className="group-hover:rotate-180 transition-transform duration-300"
                                        />
                                    </span>
                                ) : (
                                    <Link 
                                        to={`/${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="flex items-center gap-1 cursor-pointer text-gray-800 hover:text-red-600 transition-colors duration-300 py-5"
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {/* DROPDOWN */}
                                {link.hasMega && (
                                    <div className="absolute left-0 top-full mt-2 w-56 bg-white text-black shadow-xl rounded-md 
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">

                                        <div className="p-3">
                                            {link.items.map((item, i) => {
                                                let path = "/";
                                                
                                                // Simplified mapping logic
                                                const itemLower = item.toLowerCase().trim();
                                                
                                                if (itemLower === "corporate demo") path = "/corporate-demo";
                                                else if (itemLower === "financial demo") path = "/financial-demo";
                                                else if (itemLower === "marketing demo") path = "/marketing-demo";
                                                else if (itemLower === "health demo") path = "/health-demo";
                                                else if (itemLower === "it solution demo") path = "/it-solution-demo";
                                                else if (itemLower === "business solutions demo") path = "/business-solutions-demo";
                                                else if (itemLower === "consulting demo") path = "/consulting-demo";
                                                else if (itemLower === "corporate solutions demo") path = "/corporate-solutions-demo";
                                                
                                                else if (itemLower === "services") path = "/services";
                                                else if (itemLower === "service detail") path = "/service/1";
                                                
                                                else if (itemLower === "blog") path = "/blog";
                                                else if (itemLower === "blog details") path = "/blog/1";
                                                else if (itemLower === "blog archive") path = "/blog-archive";
                                                else if (itemLower === "blog masonry") path = "/blog-masonry";
                                                else if (itemLower === "blog right sidebar") path = "/blog-right-sidebar";
                                                else if (itemLower === "blog left sidebar") path = "/blog-left-sidebar";
                                                else if (itemLower === "business") path = "/blog-business";
                                                else if (itemLower === "case study blog") path = "/case-study-blog";
                                                else if (itemLower === "market trends") path = "/market-trends";
                                                
                                                else if (itemLower === "team") path = "/team";
                                                else if (itemLower === "appointment") path = "/appointment";
                                                else if (itemLower === "pricing plans" || itemLower === "pricing plan") path = "/pricing-plans";
                                                else if (itemLower === "calculator") path = "/calculator";
                                                else if (itemLower === "project sidebar") path = "/project-sidebar";
                                                else if (itemLower === "project details") path = "/project/1";
                                                else if (itemLower === "team detail" || itemLower === "team details") path = "/team/1";


                                                return (
                                                    <Link
                                                        key={i}
                                                        to={path}
                                                        className="block py-2 px-3 text-sm rounded-md cursor-pointer 
                                           hover:bg-red-50 hover:text-red-600 transition"
                                                    >
                                                        {item}
                                                    </Link>
                                                )
                                            })}
                                        </div>

                                    </div>
                                )}

                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <div
                            className="bg-gray-100 text-gray-800 p-2 rounded cursor-pointer hover:bg-red-600 hover:text-white transition-colors"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <IoMenuOutline size={22} />
                        </div>
                        {/* --- LANGUAGE SWITCHER --- */}
                        <div className="relative group flex items-center gap-2 cursor-pointer py-5 border-l pl-4 border-gray-200">
                            <img
                                src={`https://flagcdn.com/w20/${selectedLang.flag}.png`}
                                alt={selectedLang.code}
                                className="w-5 h-3 object-cover rounded-sm"
                            />
                            <span className="text-sm font-bold uppercase text-gray-800">{selectedLang.code}</span>
                            <FaChevronDown size={10} className="text-gray-800 group-hover:text-red-600 transition-colors" />

                            {/* Dropdown Menu */}
                            <div className="absolute top-full right-0 bg-white font-black shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110] min-w-[120px] rounded-md border border-gray-100">
                                {languages.map((lang) => (
                                    <div
                                        key={lang.code}
                                        onClick={() => setSelectedLang(lang)}
                                        className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 hover:text-red-600 transition-all cursor-pointer border-b last:border-none"
                                    >
                                        <img src={`https://flagcdn.com/w20/${lang.flag}.png`}
                                            className="w-4 h-3" alt={lang.name} />
                                        <span className="text-xs font-medium">{lang.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* SIDEBAR  OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/70 z-[200] transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            <div className={`fixed top-0 right-0 h-full w-[360px] bg-white z-[210] transform transition-transform duration-500 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center p-4 h-30 bg-[#1d1e33] text-white">
                    <img src={logo} className="h-10 brightness-0 invert" alt="Logo" />
                    <IoClose onClick={() => setSidebarOpen(false)} className="cursor-pointer size-6 bg-white rounded-full text-red-600" />
                </div>
                <div className="p-6">
                    <img src={logo2} className="rounded mb-4" alt="About" />
                    <h2 className="font-bold text-lg mb-2">About Us</h2>
                    <p className="text-sm text-gray-500 mb-4">We deliver expert IT solutions to grow your business.</p>
                    <p className="flex items-center gap-2 mb-2"><FaPhoneAlt className="text-red-600" /> +92 300 1234567</p>
                    <p className="flex items-center gap-2"><FaEnvelope className="text-red-600" /> info@operatech.com</p>
                </div>
            </div>
        </div>
    );
}
