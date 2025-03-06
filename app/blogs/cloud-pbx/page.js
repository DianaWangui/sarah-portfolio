import React from 'react';
import { ArrowRight, Server, Shield, Globe, Database, Settings, Network, Wifi } from 'lucide-react';
import Image from 'next/image';
import { BookOpen, ChevronRight } from 'lucide-react';
import Link from 'next/link'


const CloudPBXBlog = () => {
    return (

        <div className='bg-black lg:pl-[10%] lg:pr-[14%] h-screen overflow-auto'>
            <div className='mt-8'>
                <Link href="/blogs">
                    <button
                        className="mb-4 flex items-center text-green-500 hover:text-green-400 transition-colors duration-300"
                    >
                        <ChevronRight className="transform rotate-180 mr-1" size={16} />
                        Back to all posts
                    </button>
                </Link>
            </div>
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
                    <h2 className="text-xl font-bold mb-4 text-white">Deploy Yeastar P-Series Cloud PBX in Data Center</h2>
                    <p className="mb-2 text-gray-400">
                        You can deploy the Yeastar P-Series Cloud PBX in a Data Center.
                    </p>

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
                                YCM Server is the server that hosts a centralized platform, namely Yeastar Central Management platform. Through the graphical user interface presented on this server, you can implement the following features:
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
                                SBC Server
                                SBC Server is a server that works as a security component of Yeastar P-Series Cloud PBX.
                                When the domain name of a Cloud PBX is resolved, it will point to the SBC Server, through which the traffic flow is sent to the PBX residing behind. In this way, the detailed network topology of Cloud PBX won't be exposed to the public Internet, greatly improving security performance<br />
                                The data packet of the following services is transferred through an SBC Server:
                            </p>
                            <ul className="list-disc pl-6 mt-2 text-sm text-gray-400">
                                <li>PBX web access</li>
                                <li>Account trunk</li>
                                <li>Linkus client’s login and registration</li>
                                <li>SIP extension registration</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                            <div className="flex items-center mb-2">
                                <Globe className="text-green-500 mr-2" size={20} />
                                <h3 className="font-bold text-white">SBC Proxy Server</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                SBC Proxy Server is a server that provides extra security for Yeastar P-Series Cloud PBX.
                                The PBX services listed below go through the SBC Proxy Server. In this way, the PBX location can be hiden, thus protecting the PBX from internet threats.

                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                An SBC Proxy Server deals with the following PBX services:
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
                                PBXHub Server is the server where the Yeastar P-Series Cloud PBX instances are launched. The server is located in private subnet, which needs to be associated with a NAT gateway to ensure outbound Internet connectivity.<br />
                                A PBXHub Server provides the following services for the Cloud PBX:
                            </p>
                            <ul className="list-disc pl-6 mt-1 text-sm text-gray-400">
                                <li>PBX instance launching: When you create Yeastar P-Series Cloud PBXs on the YCM Server for customers in different regions, the PBX instances are launched in the PBXHub Server. Customers can then log in and manage their own Cloud PBX.
                                </li>
                                <li>Storage: In a PBXHub Server, you need to set up two additional storage disks. <br />
                                    - Data storage disk: This storage disk is used to store the system data of all the Cloud PBXs in the PBXHub Server.<br />
                                    - Recording storage disk: This storage disk is used to store the recording files of all the Cloud PBXs in the PBXHub Server.
                                </li>
                                <li>Port assignment for Peer Trunk (Private Network): When PBX administrator set up a Peer Trunk based on private network, PBXHub Server will provide a virtual IP address and a SIP registration port for the Cloud PBX.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-white">NOTE: SIP Provider Options</h2>
                        <p className="mb-4 text-gray-400">
                            You can use various SIP providers with this solution:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-400">
                            <li>SAFARICOM ISP (provides SIP via MPLS)</li>
                            <li>Airtel</li>
                            <li>Cloud One, Angani, and other providers that connect via internet</li>
                        </ul>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-lg mb-6 border border-gray-800">
                        <h2 className="font-bold text-xl mb-3 text-white">Domain Structure of Yeastar P-Series Cloud PBX</h2>

                        <p className="mb-4 text-gray-300">
                            Before you start to deploy domain for Yeastar P-Series Cloud PBX, you need to know the domain requirements and acquire the SSL certificates and keys of your domain.
                        </p>

                        <p className="text-green-400 mb-6 font-medium">
                            Recommended providers: GoDaddy and Namecheap
                        </p>

                        <div className="mb-6">
                            <h3 className="font-bold mb-3 text-white border-b border-gray-700 pb-2">Domain Structure and Requirements</h3>
                            <p className="mb-3 text-gray-300">
                                The <strong className="text-white">YCM Server</strong>, <strong className="text-white">SBC Proxy Server</strong> and <strong className="text-white">Cloud PBX instance</strong> require domain names. Refer to the following requirements to set up domain for your servers and PBX instances.
                            </p>

                            <h4 className="font-semibold mb-2 text-blue-300">Domain Level</h4>
                            <p className="mb-3 text-gray-300">The following are the domain level requirements of the servers and Cloud PBX instance:</p>

                            <div className="space-y-4 mb-6">
                                {/* YCM Server */}
                                <div className="bg-gray-800 p-3 rounded border-l-4 border-blue-500">
                                    <h5 className="font-bold text-white mb-1">YCM Server</h5>
                                    <p className="text-sm text-gray-300">
                                        The YCM Server domain can contain 2LD, 3LD, or 4LD, with an easy-to-remember domain name, you can access the YCM server conveniently.
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">
                                        <em>Example:</em> If the YCM Server has 3LD, the domain name can be <code className="bg-gray-700 px-1 rounded text-blue-300">ycm.example.com</code>.
                                    </p>
                                </div>

                                {/* SBC Proxy Server */}
                                <div className="bg-gray-800 p-3 rounded border-l-4 border-blue-500">
                                    <h5 className="font-bold text-white mb-1">SBC Proxy Server</h5>
                                    <p className="text-sm text-gray-300">
                                        PBX services dealt by the SBC Proxy Server use independent domain names, the wildcard domain of which is installed on the SBC Proxy Server.
                                        The SBC Proxy Server domain level is related to the Cloud PBX domain.
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">
                                        <em>Example:</em> If the Cloud PBX domain contains 4LD, and the wildcard domain of Cloud PBXs is <code className="bg-gray-700 px-1 rounded text-blue-300">*.cloud.example.com</code>, then the SBC Proxy Server domain should contain 5LD, and the wildcard domain should be <code className="bg-gray-700 px-1 rounded text-blue-300">*.proxy1.cloud.example.com</code>.
                                    </p>
                                    <div className="mt-2 bg-red-900/30 p-2 border-l-2 border-red-500 rounded">
                                        <p className="text-sm text-red-300 font-medium">
                                            <strong>Important:</strong> In the wildcard domain name of SBC Proxy Server, the DNS label to the right of the wildcard character (*) MUST be <strong>proxy1</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Cloud PBX instance */}
                                <div className="bg-gray-800 p-3 rounded border-l-4 border-blue-500">
                                    <h5 className="font-bold text-white mb-1">Cloud PBX instance</h5>
                                    <p className="text-sm text-gray-300">
                                        The Cloud PBX domain can contain 2LD, 3LD, or 4LD. With an easy-to-remember domain name, you can access the Cloud PBXs conveniently.
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">
                                        <em>Example:</em> If the Cloud PBX has 4LD, the domain name can be <code className="bg-gray-700 px-1 rounded text-blue-300">pbx1.cloud.example.com</code>.
                                    </p>
                                </div>
                            </div>

                            <h4 className="font-semibold mb-2 text-blue-300">Domain Forwarding</h4>
                            <p className="mb-3 text-gray-300">
                                You need to set up domain forwarding to make the domains of your YCM Server, SBC Proxy Server and Cloud PBX instances point to the IP address of the target servers.
                            </p>

                            <div className="space-y-4">
                                {/* YCM Server Forwarding */}
                                <div className="bg-gray-800 p-3 rounded border-l-4 border-green-500">
                                    <h5 className="font-bold text-white mb-1">YCM Server</h5>
                                    <p className="text-sm text-gray-300">
                                        Forward the domain of YCM Server to its public IP address.
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">
                                        <em>Example:</em> The public IP address of YCM Server is <code className="bg-gray-700 px-1 rounded text-green-300">123.123.123.123</code>, and the domain name is <code className="bg-gray-700 px-1 rounded text-green-300">ycm.yeastar.com</code>, you should forward <code className="bg-gray-700 px-1 rounded text-green-300">ycm.yeastar.com</code> to <code className="bg-gray-700 px-1 rounded text-green-300">123.123.123.123</code>.
                                    </p>
                                </div>

                                {/* SBC Proxy Server Forwarding */}
                                <div className="bg-gray-800 p-3 rounded border-l-4 border-green-500">
                                    <h5 className="font-bold text-white mb-1">SBC Proxy Server</h5>
                                    <p className="text-sm text-gray-300">
                                        Forward the wildcard domain of SBC Proxy Server to its public IP address.
                                        When the domain name is resolved, it will point to the SBC Proxy Server, through which the related traffic flow of the PBX services dealt by SBC Proxy Server is sent to the specific PBX residing behind.
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">
                                        <em>Example:</em> The public IP address of SBC Proxy Server is <code className="bg-gray-700 px-1 rounded text-green-300">124.124.124.124</code>, and the wildcard domain name is <code className="bg-gray-700 px-1 rounded text-green-300">*.proxy1.cloud.example.com</code>, you should forward <code className="bg-gray-700 px-1 rounded text-green-300">*.proxy1.cloud.example.com</code> to <code className="bg-gray-700 px-1 rounded text-green-300">124.124.124.124</code>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Summary Section */}
                        <div className="mt-6 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <h4 className="font-semibold mb-2 text-white">Quick Summary</h4>
                            <ul className="list-disc pl-6 mb-3 text-sm text-gray-300">
                                <li><strong className="text-white">YCM Server</strong>: Can use 2LD, 3LD, or 4LD (e.g., <code className="bg-gray-700 px-1 rounded text-blue-300">ycm.example.com</code>)</li>
                                <li><strong className="text-white">SBC Proxy Server</strong>: Uses wildcard domain (e.g., <code className="bg-gray-700 px-1 rounded text-blue-300">*.proxy1.cloud.example.com</code>)</li>
                                <li><strong className="text-white">Cloud PBX instance</strong>: Can use 2LD, 3LD, or 4LD (e.g., <code className="bg-gray-700 px-1 rounded text-blue-300">pbx1.cloud.example.com</code>)</li>
                            </ul>
                            <p className="text-sm text-green-400">
                                Recommended providers: GoDaddy and Namecheap
                            </p>
                        </div>
                    </div>

                    {/* System Requirements Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-white">System Requirements</h2>
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                            <p className="mb-4 text-gray-300"><strong className="text-white">System Requirements for YCM Server, SBC, PROXY & PBXHUB</strong></p>
                            <p className="mb-4 text-gray-400">We provide a server-calculator for you to calculate the required server configurations for the entire deployment of Yeastar P-Series Cloud PBX. The requirements of YCM Server, SBC Server, and SBC Proxy Server are fixed while that of the PBXHub server changes according to the capacity you specify.</p>
                            <p className="text-gray-400">For more information see server-calculator on yeastar's website.</p>
                        </div>
                    </div>

                    {/* Deployment Procedure Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-white">Deployment Procedure</h2>
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                            <p className="mb-4 text-gray-300"><strong className="text-white">Procedure</strong></p>

                            <div className="mb-4">
                                <p className="text-gray-300 mb-2">1. Set up your servers.</p>
                                <p className="text-gray-400 mb-2">You need to set up the following servers:</p>
                                <ul className="list-disc pl-6 text-gray-400 mb-4">
                                    <li>YCM Server</li>
                                    <li>SBC Server(s)</li>
                                    <li>SBC Proxy Server(s)</li>
                                    <li>PBXHub Server(s)</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <p className="text-gray-300 mb-2"><strong className="text-white">Important:</strong> The server network settings should meet with the following requirements:</p>
                                <ol className="list-decimal pl-6 text-gray-400 mb-4">
                                    <li>All the servers use single Ethernet port.</li>
                                    <li>For the YCM Server, SBC Server, and SBC Proxy Server, you should configure an NAT gateway to implement inbound and outbound internet connectivity. Make sure that the inbound and outbound IP addresses of a server are the same.</li>
                                    <li>For PBXHub server that only has private IP address, you should configure an NAT gateway for the server to only initiate one-way connection to the Internet, but not need to receive inbound connections initiated from the Internet.</li>
                                    <li>Make sure that the YCM Server, SBC Server, SBC Proxy Server, and PBXHub Server can communicate with each other in both private network and the public Internet.</li>
                                    <li>For the Private IP address, the 172.17.x.x and 172.19.x.x IP address ranges MUST be avoided.</li>
                                </ol>
                            </div>

                            <div className="mb-4">
                                <p className="text-gray-300 mb-2">2. Set up data disk for the servers.</p>
                                <p className="text-gray-400 mb-2"><strong className="text-white">Note:</strong> You need to set up two additional data disks on each PBXHub Server for the storage of CloudPBX system data and recording files respectively.</p>
                            </div>

                            <div className="mb-4">
                                <p className="text-gray-300 mb-2">3. Configure the following settings on the router that acts as the gateway for the network where the SBC Server and SBC Proxy Server reside.</p>
                                <ol className="list-decimal pl-6 text-gray-400">
                                    <li>Allow PING requests from the LAN (Local Area Network) to ensure that the SBC Server and SBC Proxy Server can PING the gateway for connectivity checks.</li>
                                    <li>Disable SIP ALG (Application Layer Gateway) to avoid potential issues with VoIP calls.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Get Started Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-white">Get started with deployment</h2>
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                            <p className="mb-4 text-gray-400">Contact for guidance on this solution and preparation of your servers.</p>
                            <div className="flex items-center">
                                <a href="#" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">Contact Us</a>
                                <a href="https://wa.me/+254741173015" className="ml-4 text-green-500 hover:text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloudPBXBlog;