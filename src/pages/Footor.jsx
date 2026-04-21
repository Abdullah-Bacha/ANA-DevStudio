import React from "react";
import { IoIosSend } from "react-icons/io";
import logo from "../assets/logo-01.png";
import { GoStopwatch } from "react-icons/go";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa6";
import { FaCalendarAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import smallpost from "../assets/small-post.jpg";
import smallpost2 from "../assets/small-post-2.jpg";


function Footor() {
    return (
        <div className="w-full bg-[#03041c]">
            <p className="text-white text-center pt-10 text-6xl font-bold"></p>

            {/* NEWSLETTER */}
          <div className="bg-[#353950] mt-[100px] px-6 py-8 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

    {/* TEXT */}
    <div className="text-white text-lg md:text-2xl font-semibold text-center md:text-left">
        Subscribe to Newsletter
    </div>

    {/* INPUT + BUTTON */}
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">

        <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[260px] px-3 py-2 bg-transparent border-b border-gray-300 text-white outline-none focus:border-red-500 transition"
        />

        <button className="w-full sm:w-auto bg-red-500 text-white px-5 py-3 rounded-md hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 font-medium">
            Subscribe Now
            <IoIosSend size={18} />
        </button>

    </div>
</div>

            {/* MAIN FOOTER */}
            <div className="flex flex-wrap justify-between gap-10 px-10 py-16">
                {/* LOGO SECTION */}
                <div className="flex flex-col gap-4 w-[300px]">

                    {/* LOGO (WHITE) */}
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-32 brightness-0 invert"
                    />

                    {/* DESCRIPTION */}
                    <p className="text-gray-300 text-sm">
                        At Bizper, we provide top-tier consulting and IT solutions to help
                        businesses achieve their goals with efficiency and innovation.
                    </p>

                    {/* TIME */}
                    <div className="flex items-center gap-4 mt-2">

                        {/* STOPWATCH WHITE */}
                        <GoStopwatch size={35} className="text-white" />

                        <div className="flex flex-col">
                            <p className="text-white text-sm">Monday – Friday</p>
                            <p className="text-white text-sm">9:00AM – 8:00PM</p>
                        </div>

                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex items-center gap-3 mt-2">

                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1d1e33] text-white hover:bg-red-500 transition-all duration-300">
                            <FaFacebookF size={13} />
                        </a>

                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1d1e33] text-white hover:bg-red-500 transition-all duration-300">
                            <FaTwitter size={13} />
                        </a>

                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1d1e33] text-white hover:bg-red-500 transition-all duration-300">
                            <FaInstagram size={13} />
                        </a>

                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1d1e33] text-white hover:bg-red-500 transition-all duration-300">
                            <FaLinkedinIn size={13} />
                        </a>

                    </div>

                </div>

                {/* LINKS COLUMNS */}
                <div className="flex gap-16 flex-wrap">
                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>

                        <ul className="space-y-3 text-sm">
                            {[
                                { name: "Meet Our Team", path: "/team" },
                                { name: "About Company", path: "/about" },
                                { name: "Our Services", path: "/services" },
                                { name: "News & Media", path: "/blog" },
                                { name: "Contact", path: "/contact" },
                            ].map((item, index) => (
                                <li key={index} className="relative group w-fit cursor-pointer">
                                    <Link to={item.path} className="text-gray-400 group-hover:text-red-500 transition-colors duration-300">
                                        {item.name}
                                    </Link>
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Recent post </h3>
                        <div className="flex items-center gap-3 mt-3">
                            <img
                                src={smallpost}
                                alt="Small post 1"
                                className="w-16 h-16 object-cover rounded-md"
                            />
                            <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
                                <FaCalendarAlt className="text-red-500" />
                                <div>
                                    <span className="text-red-500">12 Feb - 2023</span>
                                    <br />
                                    <p>Day tree hide from <br /> hath gathered multy</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <img
                                src={smallpost2}
                                alt="Small post 2"
                                className="w-16 h-16 object-cover rounded-md"
                            />

                            <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
                                <FaCalendarAlt className="text-red-500" />

                                <div>
                                    <span className="text-red-500">12 Feb 2023</span>
                                    <br />
                                    <span>Saving Time Achieving <br />Success in Business</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Official info:</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            5919 Trussville Crossings Pkwy, <br /> new Dusting town, Austria
                        </p>
                        <p className="flex items-center gap-2 text-gray-300 text-sm mb-4 bg-[#1d1e33] h-15 w-full px-3 py-2 rounded ">
                            <FaPhoneAlt className="text-red-500" />
                            <span>
                                <span className="text-red-500"></span> +251 994 813 323
                            </span>
                        </p>

                        <p className="flex items-center gap-2 text-gray-300 text-sm mb-4 bg-[#1d1e33] h-15 w-full px-3 py-2 rounded ">
                            <FaEnvelope className="text-red-500" />
                            <span>
                                <span className="text-red-500"></span> info@lahore
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-white bg-[#353950] py-4 text-center text-md font-medium">© Copyright 2026. All Rights Reserved by Pixcels Themes</p>
        </div>
    );
}

export default Footor;
