import Link from "next/link";
const About = () => {
  return (
    <div className="bg-transparent pl-[10%] lg:pr-[14%] mt-8 lg:mt-20">
      <h4 className="text-lg font-bold border border-[#dddddd] text-[#dddddd] py-2 px-4 w-[120px] text-center hover:border-gray-200 mb-12 font-Poppins rounded-full">
        About
      </h4>
      <h2 className="text-4xl lg:text-6xl text-gray-50 mt-4 tracking-wide">
      Security Analyst<br />Project Manager<br />Technical Ops Engineer
      </h2>

      <p className="text-gray-400 mt-4 mb-4 text-lg font-Poppins pr-[24%] leading-relaxed"> 
      Technical Operations Engineer and Project Manager with over 4+ years of experience in managing large-scale IT infrastructures, delivering exceptional technical support, and leading cross-functional projects to success. Expert in Cloud PBX and Video Management Systems (VMS), with a proven track record of designing and implementing robust IT systems to ensure high availability and optimal performance. Adept at troubleshooting complex technical issues, enhancing system security, and ensuring compliance with IT standards. Strong communicator and team leader, capable of driving efficiency improvements and managing teams to meet tight deadlines.
      </p>

      <Link className="text-gray-50 hover:text-green-500 text-lg font-Poppins" href="/blogs">My Blogs</Link>

    </div>
  );
};

export default About;