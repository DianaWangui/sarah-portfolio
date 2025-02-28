import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    { "4+": "years of experience" },
    { "500+": "Training sessions completed" },
    { "20+": "Major Projects Participated" },
    { "2000+": "Customers Trained" }
  ];

  return (
    <div className="bg-transparent md:p-6 lg:p-8 mt-4 md:mt-6 lg:mt-20 lg:pl-[20%] lg:pr-[14%] flex gap-24">
      <div className="w-full lg:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-12">
        {achievements.map((achievement, index) => {
          const key = Object.keys(achievement)[0];
          const value = Object.values(achievement)[0];

          return (
            <motion.div
              key={index}
              className="flex flex-col items-center sm:items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <motion.h1
                className="text-white text-4xl sm:text-5xl lg:text-6xl p-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {key}
              </motion.h1>
              <motion.p
                className="p-2 text-gray-400 text-sm sm:text-base text-center sm:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {value}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;