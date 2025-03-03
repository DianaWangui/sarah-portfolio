import React from 'react';
import { ArrowRight, Server, Shield, Globe, Database, Settings, Network, Wifi } from 'lucide-react';
import Image from 'next/image';

const CloudPBXBlog = () => {
    return (
        <div className="max-w-4xl mx-auto bg-black overflow-hidden border border-gray-800">
            {/* Header */}
            <div className=" text-white p-6 border-b border-gray-800">
                <h1 className="text-2xl font-bold mb-2 text-white">How to Deploy P Series Cloud PBX BYOI Solution in DC</h1>
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
                    <Image src="/Images/cloud.png" alt="Cloud PBX Architecture" layout="responsive"
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
                            YCM Server hosts the Yeastar Central Management platform. Through this graphical user interface, you can:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-sm text-gray-400">
                            <li>Create and manage Yeastar P-Series Cloud PBXs</li>
                            <li>Monitor the status of all servers (SBC Server, SBC Proxy Server, and PBXHub Server)</li>
                        </ul>
                    </div>

                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <div className="flex items-center mb-2">
                            <Shield className="text-green-500 mr-2" size={20} />
                            <h3 className="font-bold text-white">SBC Server</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            Works as a security component. When the domain name of a Cloud PBX is resolved, it points to the SBC Server, through which traffic is sent to the PBX behind it, protecting network topology from exposure.
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            Handles: PBX web access, Account trunk, SIP extension registration, and Linkus client login.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <div className="flex items-center mb-2">
                            <Globe className="text-green-500 mr-2" size={20} />
                            <h3 className="font-bold text-white">SBC Proxy Server</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            Provides extra security by hiding the PBX location, protecting it from internet threats.
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            Manages services like:
                        </p>
                        <ul className="list-disc pl-6 mt-1 text-sm text-gray-400">
                            <li>LDAP/LDAPs</li>
                            <li>Register Trunk</li>
                            <li>Port-based and DID-based Peer Trunk</li>
                            <li>Outbound service port assignment (SSH, AMI, database)</li>
                        </ul>
                    </div>

                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <div className="flex items-center mb-2">
                            <Database className="text-green-500 mr-2" size={20} />
                            <h3 className="font-bold text-white">PBXHub Server</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            Located in a private subnet with NAT gateway for outbound connectivity. This server:
                        </p>
                        <ul className="list-disc pl-6 mt-1 text-sm text-gray-400">
                            <li>Launches PBX instances for customers in different regions</li>
                            <li>Requires two additional storage disks:</li>
                            <ul className="list-disc pl-6 mt-1">
                                <li>Data storage disk for system data</li>
                                <li>Recording storage disk for call recordings</li>
                            </ul>
                            <li>Provides virtual IP addresses and SIP registration ports for Peer Trunks</li>
                        </ul>
                    </div>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 text-white">SIP Provider Options</h2>
                    <p className="mb-4 text-gray-400">
                        You can use various SIP providers with this solution:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-400">
                        <li>SAFARICOM ISP (provides SIP via MPLS)</li>
                        <li>Airtel</li>
                        <li>Cloud One, Angani, and other providers that connect via internet</li>
                    </ul>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg mb-6 border border-gray-800">
                    <h3 className="font-bold mb-2 text-white">Domain Structure and Requirements</h3>
                    <p className="mb-2 text-sm text-gray-400">
                        Before deployment, you need to understand domain requirements and acquire SSL certificates and keys.
                    </p>
                    <ul className="list-disc pl-6 mb-3 text-sm text-gray-400">
                        <li><strong>YCM Server</strong>: Can use 2LD, 3LD, or 4LD (e.g., ycm.example.com)</li>
                        <li><strong>SBC Proxy Server</strong>: Uses wildcard domain (e.g., *.proxy1.cloud.example.com)</li>
                        <li><strong>Cloud PBX instance</strong>: Can use 2LD, 3LD, or 4LD (e.g., pbx1.cloud.example.com)</li>
                    </ul>
                    <p className="text-sm text-green-400">
                        Recommended providers: Godaddy and Namecheap
                    </p>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 text-white">System Requirements</h2>
                    <p className="mb-4 text-gray-400">
                        We provide a server-calculator to help you determine required server configurations for your deployment. 
                        Requirements for YCM Server, SBC Server, and SBC Proxy Server are fixed, while PBXHub server specifications 
                        vary based on your capacity needs.
                    </p>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg mb-6 border border-gray-800">
                    <h3 className="font-bold mb-3 text-white">Deployment Procedure</h3>
                    <ol className="list-decimal pl-6 text-sm text-gray-400">
                        <li className="mb-2">
                            <strong>Set up your servers</strong>: YCM Server, SBC Server(s), SBC Proxy Server(s), PBXHub Server(s)
                        </li>
                        <li className="mb-2">
                            <strong>Configure network settings</strong>:
                            <ul className="list-disc pl-6 mt-1">
                                <li>Use single Ethernet port for all servers</li>
                                <li>Configure NAT gateway for proper connectivity</li>
                                <li>Ensure servers can communicate with each other</li>
                                <li>Avoid 172.17.x.x and 172.19.x.x IP ranges</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <strong>Set up data disks</strong> for PBXHub Servers
                        </li>
                        <li className="mb-2">
                            <strong>Configure router settings</strong>:
                            <ul className="list-disc pl-6 mt-1">
                                <li>Allow PING requests from LAN</li>
                                <li>Disable SIP ALG to avoid VoIP issues</li>
                            </ul>
                        </li>
                    </ol>
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