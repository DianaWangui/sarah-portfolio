import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      date: "Aug - Nov 2022",
      title: "Professional Security Analyst",
      institution: "USIU Africa",
      details: [
        "Vulnerability Analysis",
        "Web application security",
        "Database security",
        "Wireless network security",
        "Security operations and Monitoring",
      ],
    },
    {
      date: "2017 - 2021",
      title: "Bachelor's Degree in Computer Science",
      institution: "Karatina University",
      details: [],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const detailVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const detailItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="bg-transparent px-6 md:px-10 lg:px-[10%] mt-8 lg:mt-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-sm font-light lg:border border-gray-[500]
                     text-[#dddddd] py-2 px-4 lg:mb-12 w-[22%] text-center
                     flex justify-center items-center gap-2
                    hover:border-gray-200 font-Poppins rounded-full"> Education
        </h4>
      </motion.div>

      {/* Timeline Container */}
      <motion.div
        className="relative mt-8 ml-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Timeline line */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-gray-500 via-gray-400 to-gray-300"></div>

        {/* Education Entries */}
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative mb-12 last:mb-0 group"
            variants={itemVariants}
          >
            {/* Circle Indicator */}
            <div className="absolute -left-2.5 w-5 h-5 rounded-full border-2 border-gray-600 bg-gray-800 shadow-lg z-10 transform transition-all duration-300
                          group-hover:border-green-500 group-hover:bg-green-500 group-hover:scale-110"></div>

            {/* Content Card */}
            <div className="ml-8 p-5 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg border border-gray-700 shadow-xl
                          transition-all duration-300 group-hover:border-green-500 group-hover:translate-x-1">
              {/* Date */}
              <div className="inline-block px-3 py-1 mb-2 bg-gray-700 bg-opacity-70 rounded-full text-xs text-gray-300 font-medium
                            group-hover:bg-green-900 group-hover:text-green-100 transition-all duration-300">
                {edu.date}
              </div>

              {/* Degree Title */}
              <h3 className="text-sm lg:text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">{edu.title}</h3>

              {/* Institution */}
              <div className="flex items-center mb-3">
                <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                <p className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">{edu.institution}</p>
              </div>

              {/* Details */}
              {edu.details.length > 0 && (
                <motion.div
                  className="mt-4 pt-3 border-t border-gray-700 group-hover:border-green-900 transition-colors duration-300"
                  variants={detailVariants}
                >
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-300 transition-colors duration-300">Key Skills & Courses</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        variants={detailItemVariants}
                      >
                        <svg className="w-4 h-4 mt-0.5 mr-2 text-gray-500 group-hover:text-green-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;