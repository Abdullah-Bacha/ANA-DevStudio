import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import Header from '../components/layout/Header';
import Footer from '../pages/Footor';
import sectionBg from '../assets/section.png';

export default function BlogDetails() {
    const { id } = useParams();
    const blog = blogsData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return (
            <>
                <Header />
                <div className="min-h-screen flex items-center justify-center bg-[#fdf8f3]">
                    <h1 className="text-3xl font-bold">Blog not found!</h1>
                    <Link to="/" className="ml-4 text-red-600 underline">Go Back Home</Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="w-full bg-[#fdf8f3] min-h-screen py-20 pt-32">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-8 flex flex-col items-center text-center">
                        <div className="flex items-center gap-3 mb-4">
                            <img src={sectionBg} alt="Icon" className="w-5 h-5" />
                            <span className="text-red-600 font-bold text-xs uppercase tracking-wider">
                                {blog.date} | {blog.name}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#03031b]">
                            {blog.title}
                        </h1>
                    </div>

                    {/* Image */}
                    <img
                        src={blog.image}
                        alt="Blog Cover"
                        className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mb-10"
                    />

                    {/* Content */}
                    <div className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-gray-100">
                        <p className="text-gray-700 leading-relaxed text-lg mb-6 whitespace-pre-line">
                            {blog.content || blog.text}
                        </p>
                        <Link to="/" className="inline-block mt-8 text-red-600 font-bold hover:underline">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
