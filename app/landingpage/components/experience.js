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
  return (
    
    <div className="bg-transparent pl-[10%] pr-[14%] mt-8 lg:mt-20">
      {/* Title */}
      <h4 className="text-lg font-bold border border-[#dddddd] text-[#dddddd] py-2 px-4 w-[132px] text-center hover:border-gray-200 mb-12 font-Poppins rounded-full">
        Experience
      </h4>

      {/* Timeline Container */}
      <div className="relative mt-8 border-l-2 border-gray-500 pl-6 space-y-8">
      {/* Experience Entries */}
      {experienceData.map((exp, index) => (
        <div 
          key={index} 
          className="relative pl-8 group p-2 rounded-md transition duration-300"
        >
          {/* Circle Indicator */}
          {exp.date && (
            <div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-gray-300 group-hover:bg-green-500 transition duration-300"></div>
          )}

          {/* Date */}
          {exp.date && <p className="text-sm text-gray-400">{exp.date}</p>}

          {/* Job Title */}
          <h3 className="text-lg lg:text-2xl font-semibold">{exp.title}</h3>

          {/* Company */}
          <p className="text-sm text-gray-400">{exp.company}</p>
        </div>
      ))}
    </div>

    </div>
  );
};

export default Experience;
