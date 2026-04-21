import { useState } from "react";
import sectionBg from "../assets/section.png";
import faqIcon from "../assets/faq-1.png";
import { FaChevronDown } from "react-icons/fa";
import { faqData } from "../data/faq";

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="bg-[#cee0f8] py-20 font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="flex items-center gap-3 mb-2">
                        <img src={sectionBg} alt="Icon" className="w-6 h-6" />
                        <p className="text-red-600 font-bold uppercase tracking-wide">QUESTION AND ANSWERS</p>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    
                    {/* LEFT: Image */}
                    <div className="flex justify-center sticky top-10">
                        <img src={faqIcon} alt="FAQ Illustration" className="w-full max-w-md md:max-w-lg object-contain" />
                    </div>

                    {/* RIGHT: Accordion + Dark Footer */}
                    <div className="flex flex-col">
                        {/* FAQ Box */}
                        <div className="bg-white rounded-t-lg shadow-lg p-6 md:p-8">
                            <div className="divide-y divide-gray-100">
                                {faqData.map((faq, i) => (
                                    <div key={faq.id} className="overflow-hidden border-b border-gray-100 last:border-0">
                                        <button
                                            onClick={() => toggleFAQ(i)}
                                            className="w-full flex justify-between items-center py-5 text-left transition-all cursor-pointer"
                                        >
                                            <span className={`font-bold transition-colors ${openIndex === i ? "text-red-600" : "text-gray-800"}`}>
                                                {faq.q}
                                            </span>
                                            <FaChevronDown className={`transition-transform duration-300 ${openIndex === i ? "rotate-180 text-red-600" : "text-gray-400"}`} />
                                        </button>
                                        <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                                            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DARK FOOTER ATTACHED */}
                        <div className="bg-[#03031b] text-white p-6 rounded-b-lg flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                            <div>
                                <p className="text-sm text-gray-400">Still Have More Questions?</p>
                                <p className="font-bold text-lg">Contact Our Expert Support Team</p>
                            </div>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold transition-all text-sm cursor-pointer">
                                CONTACT US
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Faq;
