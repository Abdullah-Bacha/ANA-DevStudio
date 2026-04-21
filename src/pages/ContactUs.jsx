import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
    const contactDetails = [
        {
            id: 1,
            icon: <FaPhoneAlt />,
            title: "Phone Number",
            info: "+92 300 1234567",
        },
        {
            id: 2,
            icon: <FaEnvelope />,
            title: "Email Address",
            info: "info@example.com",
        },
        {
            id: 3,
            icon: <FaMapMarkerAlt />,
            title: "Our Location",
            info: "Johar Town, Lahore, Pakistan",
        },
    ];

    const socialLinks = ["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"];

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            {/* Left Side: Contact Info */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 p-6 md:p-10 lg:p-20"
            >
                <h1 className="text-3xl font-bold text-[#03031b]">Contact Us</h1>
                <p className="mt-4 text-gray-600 mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolor magna aliqua.
                </p>

                <div className="flex flex-col gap-6">
                    {contactDetails.map((item) => (
                        <div key={item.id} className="w-full">
                            <div className="flex items-center gap-5 pb-6">
                                <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-lg text-xl shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg font-semibold text-[#03031b]">
                                        {item.info}
                                    </p>
                                </div>
                            </div>
                            <hr className="border-gray-300" />
                        </div>
                    ))}

                    {/* Responsive Social Buttons */}
                    <div className="flex flex-wrap gap-3 mt-4">
                        {socialLinks.map((link) => (
                            <button key={link} className="border border-gray-300 text-black px-2 py-2 text-sm font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition cursor-pointer">
                                {link}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 p-6 md:p-10 lg:p-20 bg-white lg:bg-gray-100"
            >
                <div>
                    <h1 className="text-3xl font-bold text-[#03031b]">Get in Touch</h1>
                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.
                    </p>
                </div>

                <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Name" className="w-full p-4 border bg-[#eff0f6] border-gray-300 rounded-lg outline-red-400" />
                        <input type="email" placeholder="Email" className="w-full p-4 border bg-[#eff0f6] border-gray-300 rounded-lg outline-red-400" />
                        <input type="tel" placeholder="Phone" className="w-full p-4 border bg-[#eff0f6] border-gray-300 rounded-lg outline-red-400" />
                        <input type="text" placeholder="Website" className="w-full p-4 border bg-[#eff0f6] border-gray-300 rounded-lg outline-red-400" />
                    </div>
                    <textarea
                        placeholder="Message"
                        rows="4"
                        className="w-full p-4 border bg-[#eff0f6] border-gray-300 rounded-lg mt-4 outline-red-400"
                    />
                    <button className="bg-red-600 hover:bg-red-700 transition text-white font-bold py-4 rounded-lg w-full mt-6 uppercase tracking-widest">
                        Submit Now
                    </button>
                </form>
            </motion.div>
        </div>
    );
}