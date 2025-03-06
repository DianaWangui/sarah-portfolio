import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    { "4+": "years of experience" },
    { "400+": "Training sessions" },
    { "35+": "Major Projects" },
    { "2000+": "Customers Trained" }
  ];

  return (
    <div className="bg-transparent lg:pl-[10%] lg:pr-[14%] p-8">
      <div className="w-full flex flex-wrap justify-center max-w-6xl mx-auto">
        {achievements.map((achievement, index) => {
          const key = Object.keys(achievement)[0];
          const value = Object.values(achievement)[0];

          return (
            <motion.div
              key={index}
              className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/4 p-3 md:p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="bg-opacity-10 bg-white rounded-lg p-4 w-full flex flex-col items-center lg:items-start">
                <motion.h1
                  className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {key}
                </motion.h1>
                <motion.p
                  className="mt-2 text-gray-400 text-xs sm:text-sm lg:text-base text-center lg:text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {value}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;