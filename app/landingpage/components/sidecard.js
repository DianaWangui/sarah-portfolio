import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const SideCard = () => {
    return (
        // First div on the left with a fixed position
        <div className="bg-transparent border-r border-gray-100 flex flex-col items-center
                        w-full md:w-1/3 lg:w-1/4 h-screen overflow-y-scroll scrollbar-hide
                         p-4 lg:fixed left-0 top-0 "
        >
            <div className="text-center p-4 flex gap-2 flex-col items-center">
                <h1 className="text-4xl text-[#9CDCFE] font-bold font-sans">Sarah Gichuru</h1>
                <p className="text-sm text-[#CE9178] font-bold font-sans">Technical Ops Engineer</p>
            </div>

            <div className="w-full max-w-xs">
                <Image
                    src="/Images/sara.jpg"
                    alt="profile"
                    width={200} // Set appropriate width
                    height={200} // Set appropriate height
                    className="w-full h-auto rounded-xl"
                />
            </div>

            <div className="flex flex-col gap-4 items-center">
                <h2 className="text-2xl text-[#D69862] font-bold font-sans">sarahgichuru55@gmail.com</h2>
                <h2 className="text-2xl text-[#2C7AD6] font-bold font-sans">Nairobi, Kenya</h2>
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Sarah Gichuru. All rights reserved.</p>

                {/* Social Media Links */}
                <ul className="flex flex-row items-center gap-4">
                    <li className="relative w-[40px] h-[40px] flex items-center justify-center rounded-full border border-transparent transition-all duration-300 hover:border-green-500">
                        <Link href="https://www.linkedin.com/in/s-gichuru/" target="_blank">
                            <FaLinkedin className="text-white hover:text-green-500 transition-colors duration-300" size={24} />
                        </Link>
                    </li>
                    <li className="relative w-[40px] h-[40px] flex items-center justify-center rounded-full border border-transparent transition-all duration-300 hover:border-green-500">
                        <Link href="https://x.com/SarahGichuru" target="_blank">
                            <FaTwitter className="text-white hover:text-green-500 transition-colors duration-300" size={24} />
                        </Link>
                    </li>
                    <li className="relative w-[40px] h-[40px] flex items-center justify-center rounded-full border border-transparent transition-all duration-300 hover:border-green-500">
                        <Link href=" https://www.instagram.com/sarah_gichuru/?next=%2F&hl=en" target="_blank">
                            <FaInstagram className="text-white hover:text-green-500 transition-colors duration-300" size={24} />
                        </Link>
                    </li>
                    <li className="relative w-[40px] h-[40px] flex items-center justify-center rounded-full border border-transparent transition-all duration-300 hover:border-green-500">
                        <Link href="https://www.facebook.com/profile.php?id=100006807795867" target="_blank">
                            <FaFacebook className="text-white hover:text-green-500 transition-colors duration-300" size={24} />
                        </Link>
                    </li>
                </ul>



                {/* Hire Me Button */}
                <button className="border-2 font-bold border-white w-[50%] text-white py-4 rounded-full mt-8
        hover:bg-white hover:text-gray-900 transition active:text-green-500">
                    Hire Me
                </button>
            </div>
        </div>
    );
};

export default SideCard;
