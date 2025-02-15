import React from 'react';

const skillsData = [
  { name: 'SIP & VoIP', level: 85 },
  { name: 'Systems (yeastar, yealink, fanvil)', level: 90 },
  { name: 'Ftth Solutions & Fiber Planning', level: 98 },
  { name: 'Virtualization (KVM, ESXi)', level: 95 },
  { name: 'Vulnerability Analysis & Network Monitoring', level: 96 },
];

const Skills = () => {
  return (
    <section className="bg-transparent pl-[10%] pr-[14%] mt-8 lg:mt-20">
      {/* Heading Section */}
      <div className="mb-8">
      <h4 className="text-lg font-bold border border-[#dddddd] text-[#dddddd] py-2 px-4 w-[132px] text-center hover:border-gray-200 mb-12 font-Poppins rounded-full">
        Proffesional
      </h4>
        <p className="text-gray-100 text-sm md:text-base">My Knowledge Level</p>
      </div>

      {/* Skills Bars */}
      <div className="max-w-3xl">
        {skillsData.map((skill) => (
          <div key={skill.name} className="mb-6">
            {/* Skill Label and Percentage */}
            <div className="flex justify-between mb-1">
              <span className="text-gray-400 font-medium">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            {/* Progress Bar Background */}
            <div className="w-full bg-gray-300 h-2 rounded-full">
              {/* Progress Bar Fill */}
              <div
                className="h-2 bg-green-500 rounded-full"
                // style={{ width: ${skill.level}% }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;