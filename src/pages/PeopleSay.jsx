import sectionBg from "../assets/section.png";
import { motion } from "framer-motion";
import { testimonialsData, brandsData } from "../data/testimonials";

export default function PeopleSay() {
  return (
    <div className="w-full bg-[#cddff7] min-h-screen py-10 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header Section */}
        <div className="mb-10 pt-10">
          <div className="flex items-center gap-2 mb-2">
            <img src={sectionBg} alt="Icon" className="w-5 h-5" />
            <span className="text-red-600 font-bold uppercase text-xs tracking-wider">
              Client’s Testimonials
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-[#03031b] leading-tight"
          >
            What People Say About Our Company
          </motion.h1>
        </div>

        {/* Testimonials Grid - 1 Column on Mobile, 2 on Laptop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <div key={item.id} className="bg-[#ffffff] rounded p-6 md:p-8 shadow-md">
              <div className="text-yellow-400 text-lg mb-4">★★★★★</div>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Text Area */}
                <div className="flex-1 order-2 md:order-1">
                  <p className="text-gray-600 text-sm md:text-base italic">
                    "{item.text}"
                  </p>
                  <div className="mt-4">
                    <h4 className="font-bold text-[#03031b]">{item.name}</h4>
                    <p className="text-xs text-red-500 font-medium">{item.position}</p>
                  </div>
                </div>

                {/* Image Area */}
                <div className="shrink-0 order-1 md:order-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-30 h-45 object-cover  mx-auto md:mx-0 shadow-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-blue-200 my-12" />

        {/* Brands Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {brandsData.map((b, index) => (
            <img
              key={index}
              src={b}
              alt="Brand"
              className="h-8 md:h-10 w-auto transition-all duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
}