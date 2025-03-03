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