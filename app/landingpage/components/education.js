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

  return (
    <div className="bg-transparent pl-[10%] pr-[14%] mt-8 lg:mt-20">
      {/* Title */}
      <h4 className="text-lg font-bold border border-[#dddddd] text-[#dddddd] py-2 px-4 w-[132px] text-center hover:border-gray-200 mb-12 font-Poppins rounded-full">
        Education
      </h4>

      {/* Timeline Container */}
      <div className="relative mt-8 border-l-2 border-gray-500 pl-6 space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative pl-8 group p-2 rounded-md transition duration-300"
          >
            {/* Circle Indicator */}
            {edu.date && (
              <div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-gray-300 group-hover:bg-green-500 transition duration-300"></div>
            )}

            {/* Date */}
            {edu.date && <p className="text-sm text-gray-400">{edu.date}</p>}

            {/* Degree Title */}
            <h3 className="text-lg lg:text-2xl font-semibold">{edu.title}</h3>

            {/* Institution */}
            <p className="text-sm text-gray-400">{edu.institution}</p>

            {/* Details */}
            {edu.details.length > 0 && (
              <ul className="text-sm text-gray-400 list-disc pl-5 mt-2">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
