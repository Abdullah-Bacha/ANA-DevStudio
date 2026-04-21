import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamData } from '../data/team';
import Header from '../components/layout/Header';
import Footer from '../pages/Footor';
import sectionBg from '../assets/section.png';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function TeamDetails() {
    const { id } = useParams();
    const member = teamData.find((m) => m.id === parseInt(id));

    if (!member) {
        return (
            <>
                <Header />
                <div className="min-h-screen flex items-center justify-center bg-white">
                    <h1 className="text-3xl font-bold">Team Member not found!</h1>
                    <Link to="/" className="ml-4 text-red-600 underline">Go Back Home</Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="bg-white py-20 pt-32 min-h-screen">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-10 px-4">
                        <div className="flex items-center gap-3 mb-2">
                            <img src={sectionBg} alt="Icon" className="w-6 h-6" />
                            <p className="text-red-600 font-bold uppercase tracking-wide text-sm">
                                TEAM MEMBER PROFILE
                            </p>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-bold mb-10">
                            {member.name}
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 items-center md:items-start bg-[#f8f9fa] p-8 rounded-2xl shadow-lg border border-gray-200">
                        {/* Image */}
                        <div className="w-full md:w-1/3">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>

                        {/* Details */}
                        <div className="w-full md:w-2/3 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.role}</h2>
                            <p className="text-lg text-red-600 font-semibold mb-6">Expertise: {member.name}</p>
                            <p className="text-gray-700 leading-relaxed text-lg mb-8 whitespace-pre-line">
                                {member.bio}
                            </p>
                            
                            <div className="flex gap-4 mb-8">
                                <a href={member.socials.facebook} className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition border border-gray-100 block">
                                    <FaFacebook className="text-blue-500 text-xl" />
                                </a>
                                <a href={member.socials.twitter} className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition border border-gray-100 block">
                                    <FaTwitter className="text-sky-400 text-xl" />
                                </a>
                                <a href={member.socials.linkedin} className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition border border-gray-100 block">
                                    <FaLinkedin className="text-blue-700 text-xl" />
                                </a>
                            </div>

                            <Link to="/" className="inline-block w-max px-6 py-3 bg-red-600 text-white font-bold rounded hover:bg-black transition-colors">
                                Back to Team
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
