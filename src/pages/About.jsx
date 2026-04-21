import sectionBg from "../assets/section.png";
import aboutBg from "../assets/about.png";
import aboutImg from "../assets/001(1).png";
import aboutImg2 from "../assets/02(1).png";
import aboutImg3 from "../assets/03(1).png";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

function ProgressBar({ title, value }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (inView) {
            animate(count, value, { duration: 3 });
        }
    }, [count, inView, value]);

    return (
        <div className="w-full mb-5" ref={ref}>

            <div className="flex justify-between mb-2">
                <span className="font-semibold text-[#03041c]">
                    {title}
                </span>

                <span className="text-red-600 font-bold">
                    <motion.span>{rounded}</motion.span>%
                </span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-red-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    transition={{ duration: 3 }}
                    viewport={{ once: true }}
                ></motion.div>
            </div>

        </div>
    );
}

export default function About() {
    return (
        <section className="p-15 pt-40 bg-white">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-15 items-center">

                {/* LEFT IMAGE GRID */}
                <div className="grid grid-cols-2 gap-2">

                    {/* Big Image (left side tall) */}
                    <div className="row-span-2">
                        <img
                            src={aboutImg}
                            alt="About"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* Top Right Image */}
                    <div>
                        <img
                            src={aboutImg3}
                            alt="About 3"
                            className="w-full h-full object-contain rounded-xl"
                        />
                    </div>

                    {/* Middle Right Image */}

                    <div>
                        <img
                            src={aboutImg2}
                            alt="About 2"
                            className="w-full mr-20 h-full object-cover rounded-xl"
                        />
                    </div>

                </div>

                {/* RIGHT CONTENT */}
                <div className="flex flex-col gap-4">

                    {/* TOP ROW */}
                    <div className="flex items-center gap-2">
                        <img
                            src={sectionBg}
                            alt="Icon"
                            className="w-6 h-6 object-contain"
                        />
                        <p className="text-red-600 font-bold uppercase tracking-wide">
                            ABOUT US
                        </p>
                    </div>

                    {/* HEADING */}
                    <motion.h2 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold leading-tight"
                    >
                        Find out more about <br />
                        our business consulting
                    </motion.h2>

                    {/* PARAGRAPH */}
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur eget ornare quam. Sed sit amet sem sollicitudin,
                        condimentum diam sed, consequat tellus.
                    </p>

                    {/* PROGRESS BARS */}
                    <div className="mt-4">

                        <ProgressBar title="Consulting Service" value={85} />
                        <ProgressBar title="Finance Consulting" value={66} />

                        <div className="mt-4 flex items-center gap-4">

                            {/* IMAGE WRAPPER */}
                            <div className="relative">

                                <img src={aboutBg} alt="" className="rounded-lg" />

                                {/* $ BADGE (WHITE OUTLINE CIRCLE) */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-15 h-15 border-2 border-white text-white flex items-center justify-center rounded-full font-bold">
                                        $
                                    </div>
                                </div>

                            </div>

                            {/* TEXT */}
                            <p className="font-bold text-[#03041c]">
                                Helping you run a more efficient & profitable business.
                            </p>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}