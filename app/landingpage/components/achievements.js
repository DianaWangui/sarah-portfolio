import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    { "4+": "years of experience" },
    { "500+": "Training sessions completed" },
    { "20+": "Major Projects Participated" },
    { "2000+": "Customers Trained" }
  ];

  return (
    <div className="p-8 pl-[10%] pr-[14%] mt-8 lg:mt-20 flex gap-24">
      {achievements.map((achievement, index) => {
        const key = Object.keys(achievement)[0];
        const value = Object.values(achievement)[0];

        return (
          <motion.div  
            key={index} 
            className="flex flex-start flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }} 
          >
            <motion.h1 
              className="text-white text-6xl p-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {key}
            </motion.h1>
            <motion.h1 
              className="p-2 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {value}
            </motion.h1>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Achievements;
