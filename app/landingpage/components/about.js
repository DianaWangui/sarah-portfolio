import Link from "next/link";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const About = () => {
  return (
    <div className="bg-trasparent lg:h-screen lg:pl-[10%] lg:pr-[14%] p-8">
      <h4 className="text-sm font-light lg:border border-gray-[500]
                     text-[#dddddd] py-2 px-4 lg:mb-12 w-[120px] text-center
                     flex justify-center items-center gap-2 decoration-inherit
                    hover:border-gray-200 font-Poppins rounded-full">
        <PersonOutlineIcon className="text-green-500" />
        ABOUT
      </h4>
      <h1 className="text-4xl lg:text-6xl font-bold lg:font-light text-gray-100 mt-4 lg:tracking-wider leading-relaxed">
        Security Analyst,<br />Project Manager &<br />Technical Ops Engineer
      </h1>

      <p className="text-gray-500 mt-4 mb-4 text-lg lg:pr-[8%] leading-[12rem">
        Technical Operations Engineer and Project Manager with over <span className="text-[#FFEFC8]">4+ years </span>of experience in managing large-scale IT infrastructures, delivering exceptional technical support, and leading cross-functional projects to success. Expert in Cloud PBX and Video Management Systems (VMS), with a proven track record of designing and implementing robust IT systems to ensure high availability and optimal performance. Adept at troubleshooting complex technical issues, enhancing system security, and ensuring compliance with IT standards. Strong communicator and team leader, capable of driving efficiency improvements and managing teams to meet tight deadlines.
      </p>
      <Link
        href="/blogs"
        className="text-gray-50 text-lg font-poppins flex items-center gap-2 underline decoration-inherit hover:text-green-500"
      >
        <span className="flex items-center gap-2 decoration-inherit">
          my blogs
          <OpenInNewIcon className="decoration-inherit" />
        </span>
      </Link>
    </div>
  );
};

export default About;