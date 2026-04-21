import React from 'react';
import Header from '../components/layout/Header';
import Footer from './Footor';
import { motion } from 'framer-motion';
import { blogsData } from '../data/blogs';
import { Link } from 'react-router-dom';

export default function BlogArchivePage() {
    return (
        <div className="bg-white">
            <Header />
            <section className="bg-[#03041c] pt-48 pb-24 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Blog Archive</h1>
                <p className="text-gray-400">Our latest news, articles, and insights</p>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-10">
                    {blogsData.map((blog, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-xl mb-6">
                                <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />
                                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                                    {blog.date}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-[#03041c] mb-3 group-hover:text-red-600 transition">
                                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                            </h3>
                            <p className="text-gray-500 mb-6 line-clamp-2">{blog.text}</p>
                            <Link to={`/blog/${blog.id}`} className="text-red-600 font-bold hover:underline">Read More →</Link>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
