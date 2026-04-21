import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import Header from '../components/layout/Header';
import Footer from '../pages/Footor';
import sectionBg from '../assets/section.png';

export default function ProjectDetails() {
    const { id } = useParams();
    const project = portfolioData.find((p) => p.id === parseInt(id));

    if (!project) {
        return (
            <>
                <Header />
                <div className="min-h-screen flex items-center justify-center bg-[#cee0f8]">
                    <h1 className="text-3xl font-bold text-black">Project not found!</h1>
                    <Link to="/" className="ml-4 text-red-600 underline">Go Back Home</Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="relative w-full bg-[#cee0f8] overflow-hidden pt-32 pb-20">
                <div className="absolute top-0 left-0 w-full h-[450px] bg-[#03031b] z-0"></div>
                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <img src={sectionBg} alt="Icon" className="w-6 h-6" />
                            <p className="text-red-600 font-bold uppercase tracking-wide">PROJECT DETAILS</p>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                            {project.text}
                        </h1>
                    </div>

                    {/* Image */}
                    <div className="shadow-2xl rounded-lg overflow-hidden bg-white mb-10">
                        <img src={project.img} alt="portfolio" className="w-full h-auto max-h-[600px] object-cover" />
                    </div>

                    {/* Details section */}
                    <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-4">{project.subtext}</h2>
                        <p className="text-gray-700 leading-relaxed text-lg mb-8">
                            {project.details}
                        </p>
                        <Link to="/" className="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded hover:bg-black transition-colors">
                            Back to Portfolio
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
