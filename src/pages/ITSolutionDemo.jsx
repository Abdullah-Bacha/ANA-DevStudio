import React from 'react';
import Header from '../components/layout/Header';
import Footer from './Footor';
import { motion } from 'framer-motion';
import {
    FaCloud, FaShieldAlt, FaRobot, FaNetworkWired,
    FaCode, FaMobile, FaCheckCircle, FaArrowRight,
    FaUsers, FaProjectDiagram, FaStar, FaHeadset
} from 'react-icons/fa';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' }
    })
};

const services = [
    { icon: <FaCloud size={28} />, title: 'Cloud Computing', desc: 'Scalable cloud infrastructure tailored to your business needs with 99.9% uptime guarantee.' },
    { icon: <FaShieldAlt size={28} />, title: 'Cyber Security', desc: 'End-to-end protection from threats with real-time monitoring and rapid incident response.' },
    { icon: <FaRobot size={28} />, title: 'AI Integration', desc: 'Smart automation and machine learning solutions that transform your workflow efficiency.' },
    { icon: <FaNetworkWired size={28} />, title: 'Network Solutions', desc: 'High-performance networking infrastructure designed for speed, reliability and security.' },
    { icon: <FaCode size={28} />, title: 'Custom Software', desc: 'Bespoke software development using the latest technologies to solve your unique challenges.' },
    { icon: <FaMobile size={28} />, title: 'Mobile Apps', desc: 'Cross-platform mobile applications built for performance, usability and business growth.' },
];

const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' },
];

const process = [
    { step: '01', title: 'Discovery', desc: 'We analyze your business requirements and define clear technical objectives.' },
    { step: '02', title: 'Planning', desc: 'Our experts craft a detailed roadmap with timelines and technology stack.' },
    { step: '03', title: 'Development', desc: 'Agile development with regular updates and transparent communication.' },
    { step: '04', title: 'Delivery', desc: 'Rigorous testing, deployment and ongoing support after launch.' },
];

export default function ITSolutionDemo() {
    return (
        <div className="bg-[#03041c] text-white">
            <Header />

            {/* ── HERO ── */}
            <section className="relative py-28 px-6 overflow-hidden">
                {/* Background glow effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.span
                        variants={fadeUp} initial="hidden" animate="visible" custom={0}
                        className="inline-block bg-red-600 text-white text-xs font-bold px-5 py-2 rounded-full mb-6 uppercase tracking-widest"
                    >
                        IT Solutions & Technology
                    </motion.span>

                    <motion.h1
                        variants={fadeUp} initial="hidden" animate="visible" custom={1}
                        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
                    >
                        Future-Proof Your <br />
                        <span className="text-red-500">Technology</span> Today
                    </motion.h1>

                    <motion.p
                        variants={fadeUp} initial="hidden" animate="visible" custom={2}
                        className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
                    >
                        We deliver cutting-edge IT solutions that empower businesses to scale, 
                        innovate and stay ahead in the digital era.
                    </motion.p>

                    <motion.div
                        variants={fadeUp} initial="hidden" animate="visible" custom={3}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 flex items-center gap-2">
                            Get Started <FaArrowRight />
                        </button>
                        <button className="border border-white/20 hover:border-red-500 hover:text-red-500 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300">
                            View Our Work
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="bg-[#0d0e24] py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                            className="text-center"
                        >
                            <p className="text-4xl md:text-5xl font-extrabold text-red-500 mb-2">{s.value}</p>
                            <p className="text-gray-400 text-sm uppercase tracking-wider">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── SERVICES ── */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-red-600/20 text-red-400 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
                            What We Offer
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core <span className="text-red-500">Services</span></h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Comprehensive technology solutions designed to transform your business operations.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((svc, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
                                className="group p-8 border border-white/15 rounded-2xl hover:border-red-500 hover:bg-red-600/5 transition-all duration-500 cursor-pointer"
                            >
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-600/20 text-red-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 mb-6">
                                    {svc.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">{svc.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                                <div className="mt-5 flex items-center gap-2 text-red-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    Learn More <FaArrowRight size={12} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="bg-[#0d0e24] py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block bg-red-600/20 text-red-400 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
                            How We Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold">Our <span className="text-red-500">Process</span></h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((p, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                                className="relative p-8 border border-white/10 rounded-2xl hover:border-red-500/40 transition-all duration-300"
                            >
                                <span className="text-6xl font-extrabold text-white/5 absolute top-4 right-6 select-none">{p.step}</span>
                                <div className="w-10 h-10 flex items-center justify-center bg-red-600 rounded-full text-white font-bold text-sm mb-5">
                                    {p.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY US ── */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="flex-1"
                    >
                        <span className="inline-block bg-red-600/20 text-red-400 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            We Deliver <span className="text-red-500">Results</span> That Matter
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            With over 15 years of industry experience, our team of certified engineers and 
                            consultants brings unmatched expertise to every project we undertake.
                        </p>
                        <div className="space-y-4">
                            {[
                                'Certified Microsoft & AWS Partners',
                                'ISO 27001 Security Certified',
                                'Dedicated Project Manager',
                                '24/7 Technical Support',
                                'Agile Development Methodology',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-red-500 flex-shrink-0" />
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
                        className="flex-1 grid grid-cols-2 gap-4"
                    >
                        {[
                            { icon: <FaUsers size={24} />, title: 'Expert Team', desc: '50+ certified professionals' },
                            { icon: <FaProjectDiagram size={24} />, title: 'Proven Track', desc: '500+ projects delivered' },
                            { icon: <FaStar size={24} />, title: 'Top Rated', desc: '4.9/5 client rating' },
                            { icon: <FaHeadset size={24} />, title: '24/7 Support', desc: 'Always here for you' },
                        ].map((card, i) => (
                            <div key={i} className="p-6 border border-white/10 rounded-2xl hover:border-red-500/40 hover:bg-red-600/5 transition-all duration-300">
                                <div className="text-red-500 mb-3">{card.icon}</div>
                                <h4 className="font-bold mb-1">{card.title}</h4>
                                <p className="text-gray-400 text-sm">{card.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-red-600 py-20 px-6">
                <motion.div
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-red-100 text-lg mb-10 max-w-2xl mx-auto">
                        Let's discuss how our IT solutions can accelerate your growth and give you a competitive edge.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="bg-white text-red-600 font-bold px-8 py-4 rounded-md hover:bg-[#03041c] hover:text-white transition-all duration-300">
                            Start a Project
                        </button>
                        <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-md hover:bg-white hover:text-red-600 transition-all duration-300">
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
