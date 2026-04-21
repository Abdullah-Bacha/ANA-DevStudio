import React from 'react';
import { useParams, Link } from 'react-router-dom';
import HomeTwo from './HomeTwo';
import Services from '../../pages/Services';
import Footor from '../../pages/Footor';
import Faq from '../../pages/Faq.jsx';
import group from '../../assets/groupe.jpg';
import { FaBriefcase, FaChartLine, FaLaptopCode, FaArrowLeft } from "react-icons/fa";
import { servicesData } from '../../data/services';

export default function ServicesDetails() {
    const { id } = useParams();
    const service = servicesData.find((s) => s.id === parseInt(id)) || servicesData[0]; // fallback to first if not found

    return (
        <div>
            {/* Keeping header and other sections as per user request to not change UI overall structure */}
            <HomeTwo />
            <Services />

            {/* MAIN SECTION */}
            <div className="bg-[#03041c] flex flex-col lg:flex-row min-h-screen relative">
                
                <Link to="/" className="absolute top-4 left-6 text-white flex items-center gap-2 hover:text-red-500 z-10 transition-colors">
                    <FaArrowLeft /> Back
                </Link>

                {/* LEFT SIDE */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start p-6">

                    {/* TEXT */}
                    <p className="text-xl sm:text-2xl font-normal text-white mb-4 pt-6 lg:pt-10">
                        WHY CHOOSE US <br />
                        <span className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                            We working for you to build <br /> your business fast
                        </span>
                    </p>

                    {/* IMAGE */}
                    <img 
                        src={group} 
                        alt="group" 
                        className="w-full max-w-md pt-6 lg:pt-10 rounded-md border-slate-500 mx-auto lg:mx-0"
                    />

                </div>

                {/* RIGHT SIDE */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start p-6">

                    {/* TEXT */}
                    <p className="text-xl sm:text-2xl font-normal text-white mb-6 pt-6 lg:pt-10">
                       <span className='font-bold text-3xl'> 4M +</span> <br />
                        Business Using Stripe
                    </p>

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

                        {/* LEFT BIG CARD (Dynamic) */}
                        <div className="bg-gradient-to-r from-[#201324] to-[#101429] p-6 rounded-lg shadow-md lg:row-span-2 flex flex-col justify-center items-center text-center hover:border hover:border-white transition-all">
                            <FaBriefcase className="text-4xl text-red-600 mb-4" />
                            <h2 className="font-bold text-xl mb-4 text-red-500">{service.title}</h2>
                            <p className="text-sm text-white leading-relaxed">
                                {service.details}
                            </p>
                        </div>

                        {/* TOP RIGHT */}
                        <div className="bg-gradient-to-r from-[#201324] to-[#101429] p-6 rounded-lg text-center shadow-md hover:border hover:border-white transition-all">
                            <FaChartLine className="text-3xl text-red-600 mx-auto mb-3" />
                            <h2 className="font-bold text-lg mb-2 text-white">Strategic Planning</h2>
                            <p className="text-sm text-white">
                                Smart strategies to achieve long-term business success.
                            </p>
                        </div>

                        {/* BOTTOM RIGHT */}
                        <div className="bg-gradient-to-r from-[#201324] to-[#101429] p-6 rounded-lg text-center shadow-md hover:border hover:border-white transition-all">
                            <FaLaptopCode className="text-3xl text-red-600 mx-auto mb-3" />
                            <h2 className="font-bold text-lg mb-2 text-white">IT Management</h2>
                            <p className="text-sm text-white">
                                Manage and optimize your IT systems for better performance.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            <Faq />
            <Footor />
        </div>
    );
}