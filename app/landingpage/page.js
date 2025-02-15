import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Contact from './components/contact';
const Home = () => {
  return (
    <div className=" w-[100%] flex flex-col lg:flex-row bg-[#001f3f] mb-4">
      {/* First div on the left fixed position */}
      <div className="bg-transparent border-r border-gray-100 flex flex-col items-center
                      w-full md:w-1/3 lg:w-1/4 h-screen overflow-y-auto p-4 lg:fixed left-0 top-0
                      scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <div className="text-center p-4 flex gap-2 flex-col items-center">
        <h1 className="text-4xl font-bold font-sans">Sarah Gichuru</h1>
        <p className="text-sm font-bold font-sans">Technical Ops engineer</p>
        </div>
        <div className="w-full max-w-xs">
          <Image
            src="/Images/sarah.jpg"
            alt="profile"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-xl"
          />
        </div>

        <div className='flex flex-col gap-4 items-center'>
          <h2 className="text-2xl font-bold font-sans">sarah@gmail.com</h2>
          <h2 className="text-2xl font-bold font-sans">Nairobi Kenya</h2>
          <p>&copy; {new Date().getFullYear()} Sarah Gichuru. All rights reserved.</p>
          <ul className="flex flex-row items-center gap-4">
            <li className='text-white hover:text-green-500'>
              <Link href="https://www.linkedin.com" target="_blank">
                <FaLinkedin size={24} />
              </Link>
            </li>
            <li className='text-white hover:text-green-500'>
              <Link href="https://www.twitter.com" target="_blank">
                <FaTwitter size={24} />
              </Link>
            </li>
            <li className='text-white hover:text-green-500'>
              <Link href="https://www.instagram.com" target="_blank">
                <FaInstagram size={24} />
              </Link>
            </li>
            <li className='text-white hover:text-green-500'>
              <Link href="https://www.facebook.com" target="_blank">
                <FaFacebook size={24} />
              </Link>
            </li>
          </ul>
          <button className="border-2 text-bold border-white w-[50%] text-white py-4 rounded-full mt-8 hover:bg-white hover:text-gray-900 trans font-sans active:text-green-500">Hire Me</button>
        </div>
      </div>


      {/* First div on the right scrollable */}
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