import React from 'react'
import { Link } from "react-router-dom";
import sectionBg from "../assets/section.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { blogsData } from "../data/blogs";

function LatestBlog() {
    return (
        <div className="w-full bg-[#fdf8f3] min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-center gap-3 mt-10">
                        <img src={sectionBg} alt="Icon" className="w-5 h-5" />
                        <span className="text-red-600 font-bold text-xs uppercase tracking-wider">
                            Latest Blogs
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#03031b] text-center">
                        Our Latest News & Articles
                    </h1>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    {blogsData.map((b, index) => (
                        <div
                            key={b.id}
                            className="bg-white rounded-md shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition"
                        >

                            {/* Image Section */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative overflow-hidden rounded-xl group"
                            >

                                {/* Image */}
                                <img
                                    src={b.image}
                                    alt="Blog"
                                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Date Badge */}
                                <div className="absolute top-5 left-5 flex flex-row text-center rounded-md overflow-hidden">

                                    {/* Day */}
                                    <span className="bg-red-600 text-white text-sm font-bold px-3 py-2">
                                        {b.date.split(" ")[0]}
                                    </span>

                                    {/* Month */}
                                    <span className="bg-white text-red-600 text-xs font-semibold px-3 py-2">
                                        {b.date.split(" ")[1]}
                                    </span>

                                </div>
                            </motion.div>

                            {/* Content */}
                            <div className="p-5">
                                <span className="text-gray-500 text-sm">{b.name}</span>

                                {/* Title with hover effect */}
                                <Link to={`/blog/${b.id}`}>
                                    <h2 className="relative inline-block font-semibold text-[#03031b] mb-3 cursor-pointer group/title">
                                        <span className="transition-colors duration-300 group-hover/title:text-red-600">
                                            {b.title}
                                        </span>
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover/title:w-full"></span>
                                    </h2>
                                </Link>

                                <p className="text-sm text-gray-600 mb-4">{b.text}</p>

                                <Link to={`/blog/${b.id}`} className="group flex items-center gap-2 text-black font-semibold transition-colors duration-300 hover:text-red-500 mt-10 w-max">
                                    Read More
                                    <FaArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default LatestBlog