import { Link } from "react-router-dom";
import sectionBg from "../assets/section.png";
import { FaShareAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { teamData } from "../data/team";

export default function Team() {
  return (
    <div className="bg-white py-10">

      {/* HEADER */}
      <div className="flex flex-col items-center text-center mb-10 px-4">

        <div className="flex items-center gap-3 mb-2">
          <img src={sectionBg} alt="Icon" className="w-6 h-6" />
          <p className="text-red-600 font-bold uppercase tracking-wide text-sm">
            OUR EXPERT TEAM
          </p>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold">
          Meet Our Expert Team
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">

        {teamData.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >

            {/* IMAGE */}
            <Link to={`/team/${member.id}`}>
              <img
                src={member.img}
                alt="team"
                className="w-full h-[320px] sm:h-[380px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              />
            </Link>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 pointer-events-none transition-all duration-500"></div>

            {/* NAME LABEL */}
            <div className="absolute bottom-0 left-0 bg-white text-black px-5 sm:px-8 py-3 sm:py-4 font-semibold text-xs sm:text-sm
              [clip-path:polygon(0_0,80%_0,100%_100%,0_100%)]">
              {member.name} - {member.role}
            </div>

            {/* SHARE BUTTON */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 group/share">

              <button className="bg-red-600 text-white p-2 sm:p-3 rounded cursor-pointer">
                <FaShareAlt size={14} />
              </button>

              {/* SOCIAL ICONS */}
              <div className="absolute bottom-12 right-0 flex flex-col gap-2 opacity-0 group-hover/share:opacity-100 transition-all duration-300">

                <a href={member.socials.facebook} className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition block">
                  <FaFacebook className="text-blue-500 text-sm sm:text-lg" />
                </a>

                <a href={member.socials.twitter} className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition block">
                  <FaTwitter className="text-sky-400 text-sm sm:text-lg" />
                </a>

                <a href={member.socials.linkedin} className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition block">
                  <FaLinkedin className="text-blue-700 text-sm sm:text-lg" />
                </a>

              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}