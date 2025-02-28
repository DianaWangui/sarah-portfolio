import { motion } from "framer-motion";
import { Briefcase } from "lucide-react"; // Importing the Briefcase icon

const Experience = () => {
  // Experience dummy data
  const experienceData = [
    {
      date: "July 2021 - Present",
      title: "Technical Operations Engineer",
      company: "Swift Technologies",
    },
    {
      date: "August 2023 - Contract",
      title: "Technical Support Engineer",
      company: "Swift Technologies",
    },
    {
      date: "August 2023 - Contract",
      title: "Technical Support",
      company: "Africa Climate Summit Event 2023, KICC",
    },
    {
      date: "May - Oct 2019",
      title: "WEB Designer-Intern",
      company: "Kiambu Institute of Science and Technology",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-transparent px-6 md:px-10 lg:px-[10%] mt-8 lg:mt-20">
      {/* Title with icon */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
      >
        <h4 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-700 text-white py-2 px-6 inline-flex items-center gap-2 mb-12 font-Poppins rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          <Briefcase className="h-5 w-5" /> Experience
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

        {/* Experience Entries */}
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="relative mb-12 last:mb-0 group"
            variants={itemVariants}
          >
            {/* Circle Indicator - Changes to green on hover */}
            <div className="absolute -left-2.5 w-5 h-5 rounded-full border-2 border-gray-600 bg-gray-800 shadow-lg z-10 transform transition-all duration-300 
                          group-hover:border-green-500 group-hover:bg-green-500 group-hover:scale-110"></div>

            {/* Content Card - Border changes to green on hover */}
            <div className="ml-8 p-5 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg border border-gray-700 shadow-xl 
                          transition-all duration-300 group-hover:border-green-500 group-hover:translate-x-1">
              {/* Date */}
              <div className="inline-block px-3 py-1 mb-2 bg-gray-700 bg-opacity-70 rounded-full text-xs text-gray-300 font-medium
                            group-hover:bg-green-900 group-hover:text-green-100 transition-all duration-300">
                {exp.date}
              </div>

              {/* Job Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">{exp.title}</h3>

              {/* Company */}
              <p className="text-gray-400 font-medium">{exp.company}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;