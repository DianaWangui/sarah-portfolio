import Link from "next/link";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const About = () => {
  return (
    <div className="bg-transparent lg:pl-[10%] lg:pr-[14%] p-8">
      <h4 className="text-sm font-light lg:border border-gray-[500]
                     text-[#dddddd] py-2 px-4 lg:mb-12 w-[120px] text-center
                     flex justify-center items-center gap-2 decoration-inherit
                    hover:border-gray-200 font-Poppins rounded-full">
        <PersonOutlineIcon className="text-green-500" />
        ABOUT
      </h4>
        <h1 className="text-2xl lg:text-3xl font-bold lg:font-light text-gray-100 mt-4 lg:tracking-wider leading-relaxed">
        Cloud & Network Infrastructure Architect |<br />VoIP, Virtualization &<br /> Cybersecurity Specialist 
        </h1>

        <p className="text-gray-300 mt-4 mb-4 text-lg lg:pr-[8%] leading-[12rem">
          I am a <span className="text-[#FFEFC8]">Cloud & Network Solutions Architect</span> specializing in <span className="text-[#FFEFC8]">VoIP, Cybersecurity, and IT Infrastructure</span>. With years of experience designing, deploying, and managing secure, scalable solutions, I help businesses optimize their technology for maximum efficiency.
          <br/><br/>
          <strong>What I Do Best:</strong>
          <br/>
          • Design and deploy <strong>scalable VoIP solutions</strong> (Yeastar PBX, SIP troubleshooting, CRM integrations).
          <br/>
          • Secure enterprise networks with <strong>advanced VPNs (IPsec, WireGuard), VLANs, and monitoring tools</strong> (Zabbix, Grafana, Prometheus).
          <br/>
          • Manage <strong>cloud and virtualization platforms</strong> (KVM, Proxmox, ESXi, Linux servers) and implement <strong>colocation solutions</strong>.
          <br/>
          • Build and optimize <strong>IT infrastructure</strong>, including fiber networks (FTTX), structured cabling, CCTV, and biometric security.
          <br/><br/>
          I am passionate about <strong>optimizing IT infrastructure, improving cybersecurity, and delivering seamless communication solutions</strong> that enhance business efficiency. Let's connect and explore how technology can drive success!
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