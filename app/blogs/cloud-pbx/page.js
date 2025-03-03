import React from 'react';
import { ArrowRight, Server, Shield, Globe, Database } from 'lucide-react';
import Image from 'next/image';

const CloudPBXBlog = () => {
    return (
        <div className="max-w-4xl mx-auto bg-black overflow-hidden border border-gray-800">
            {/* Header */}
            <div className=" text-white p-6 border-b border-gray-800">
                <h1 className="text-2xl font-bold mb-2 text-white">Cloud PBX BYOI Deployment Solution in DC</h1>
                <p className="text-gray-400">
                    Empower your business with a fully customizable, self-hosted P Series Cloud PBX solution.
                </p>
            </div>

            {/* Main Content */}
            <div className="p-6">
                <div className="mb-6">
                    <p className="mb-4 text-gray-400">
                        Built from scratch with virtualization, advanced clustering, and seamless networking, our
                        P-Series Cloud PBX has already transformed communication for 180+ extensions since its
                        launch in January 2024.
                    </p>
                    <p className="mb-4 text-gray-400">
                        Take control of your infrastructure and scale effortlessly with our BYOI
                        (Bring Your Own Infrastructure) approach.
                    </p>
                    <p className="text-sm text-gray-500 italic mb-6">
                        Note: This solution requires higher server specifications for multi-instance architecture, SBC, etc.
                    </p>
                    <Image src="/Images/cloud.png" alt="Cloud Image" layout="responsive"
                        width={16}
                        height={9}
                    />
                </div>

                <h2 className="text-xl font-bold mb-4 text-white">Supported VM platforms</h2>
                <p className="mb-2 text-gray-400">
                    Yeastar P-Series Cloud PBX can be deployed on the following VM platforms, which can eliminate the cost of separate hardware:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-400">
                    <li>Microsoft Hyper-v</li>
                    <li>KVM</li>
                    <li>VMware</li>
                </ul>

                <h2 className="text-xl font-bold mb-4 text-white">The foundational architecture of Yeastar P-Series Cloud PBX includes the following components:</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <div className="flex items-center mb-2">
                            <Server className="text-green-500 mr-2" size={20} />
                            <h3 className="font-bold text-white">YCM Server</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            Hosts a centralized platform for creating and managing Yeastar P-Series Cloud PBXs
                            and monitoring the status of all servers.
                        </p>
                    </div>

                    <div className=" bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <div className="flex items-center mb-2">
                            <Shield className="text-green-500 mr-2" size={20} />
                            <h3 className="font-bold text-white">SBC Server</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            Works as a security component, preventing exposure of detailed network topology
                            to the public Internet and improving security performance.
                        </p>
                    </div>

                    <div className=" bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <div className="flex items-center mb-2">
                            <Globe className="text-green-500 mr-2" size={20} />
                            <h3 className="font-bold text-white">SBC Proxy Server</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            Provides extra security by hiding the PBX location, protecting it from internet threats
                            and managing services like LDAP/LDAPs and Register Trunk.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <div className="flex items-center mb-2">
                            <Database className="text-green-500 mr-2" size={20} />
                            <h3 className="font-bold text-white">PBXHub Server</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            Launches the Yeastar P-Series Cloud PBX instances and provides storage
                            for system data and recording files.
                        </p>
                    </div>
                </div>

                <div className=" bg-gray-900 p-4 rounded-lg mb-6 border border-gray-800">
                    <h3 className="font-bold mb-2 text-white">Domain Structure and Requirements</h3>
                    <p className="mb-2 text-sm text-gray-400">
                        The YCM Server, SBC Proxy Server and Cloud PBX instance require domain names with
                        specific requirements for domain levels and forwarding.
                    </p>
                    <p className="text-sm text-green-400">
                        Recommended providers: Godaddy and Namecheap
                    </p>
                </div>

                <div className="bg-gray-900 text-white p-4 rounded-lg mb-6 border border-gray-800">
                    <h3 className="font-bold mb-2">Get started with deployment</h3>
                    <p className="mb-4 text-gray-400">
                        For guidance on this solution and preparation of your servers, contact us today.
                    </p>
                    <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors duration-300">
                        Contact Us <ArrowRight className="ml-2" size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CloudPBXBlog;