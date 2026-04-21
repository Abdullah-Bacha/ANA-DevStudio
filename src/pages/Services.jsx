import { Link } from "react-router-dom";
import sectionBg from "../assets/section.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { servicesData, workProcessData } from "../data/services";

function Services() {

    return (
        <>
            {/* SERVICES SECTION */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 bg-[#ccdff7]">

                {/* HEADER */}
                <div className="flex flex-col items-center mb-10 text-center">
                    <div className="flex items-center gap-3 mb-2 mt-10">
                        <img src={sectionBg} alt="Icon" className="w-6 h-6" />
                        <p className="text-red-600 font-bold uppercase tracking-wide">
                            OUR SERVICES
                        </p>
                    </div>

                    <motion.h1 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl font-bold"
                    >
                        Our Provided Services
                    </motion.h1>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {servicesData.map((item, index) => (
                        <div
                            key={item.id}
                            className="mt-6 bg-[#e4eefc] p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative"
                        >

                            {/* ICON */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt="service icon"
                                    className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* TITLE */}
                            <h2 className="text-xl font-bold mb-2 group-hover:text-red-600 transition">
                                {item.title}
                            </h2>

                            {/* DESCRIPTION */}
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                {item.desc}
                            </p>

                            {/* BUTTON */}
                            <Link to={`/service/${item.id}`} className="absolute bottom-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-black transition-all cursor-pointer">
                                <FaArrowRight size={14} />
                            </Link>

                        </div>
                    ))}

                </div>

                {/* FOOTER TEXT */}
                <div className="flex flex-col lg:flex-row justify-between items-center text-gray-600 mt-14 font-semibold gap-4 text-center lg:text-left">
                    <p>
                        Our success as consultants will depend on the essential rightness of the advice.
                    </p>

                    <p>
                        Want to learn more About us?
                        <span className="text-red-600 font-semibold cursor-pointer ml-1 hover:underline">
                            Click here
                        </span>
                    </p>
                </div>
            </div>

            {/* WORK PROCESS HEADER */}
            <div className="flex flex-col items-center mb-10 text-center mt-20">
                <div className="flex items-center gap-3 mb-2">
                    <img src={sectionBg} alt="Icon" className="w-6 h-6" />
                    <p className="text-red-600 font-bold uppercase tracking-wide">
                        OUR WORK PROCESS
                    </p>
                </div>

                <motion.h1 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl font-bold mt-2"
                >
                    How Our Services Work
                </motion.h1>
            </div>

            {/* WORK PROCESS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20">

                {workProcessData.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center gap-4 group"
                    >

                        {/* CIRCLE IMAGE */}
                        <div className="relative flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-hidden rounded-full">

                            {/* ROTATING BORDER */}
                            <div className="absolute inset-0 rounded-full border-2 border-dotted border-gray-400 animate-spin [animation-duration:60s] group-hover:border-red-600"></div>

                            {/* IMAGE */}
                            <img
                                src={step.img}
                                alt={step.title}
                                className="w-full h-full object-contain relative z-10 p-4 transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* TITLE */}
                        <h1 className="font-bold text-xl group-hover:text-red-600 transition">
                            {step.title}
                        </h1>

                        {/* DESC */}
                        <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
                            {step.desc}
                        </p>

                    </motion.div>
                ))}

            </div>
        </>
    );
}

export default Services;