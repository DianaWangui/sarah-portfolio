import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Contact from './components/contact';
import SideCard from './components/sidecard';
const Home = () => {
  return (
    <div className=" w-[100%] flex flex-col lg:flex-row bg-[#001f3f] mb-4">
      <SideCard />
      <div className="bg-trasparent w-[100%] lg:w-[76%] h-[100%] lg:ml-[24%]">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
export default Home;