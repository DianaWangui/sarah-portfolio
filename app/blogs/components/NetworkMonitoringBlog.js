import React from 'react';
import { CheckCircle, Terminal, BarChart2, Server, Workflow } from 'lucide-react';

const NetworkMonitoringBlog = () => {
    const steps = [
        {
            title: "Installing Zabbix",
            icon: <Server className="text-green-500" size={20} />,
            commands: [
                "sudo apt update && sudo apt upgrade -y",
                "sudo apt install zabbix-server-mysql zabbix-frontend-php zabbix-apache-conf zabbix-agent"
            ],
            description: "Start by updating your system and installing the Zabbix server, frontend, and agent."
        },
        {
            title: "Installing Prometheus",
            icon: <Workflow className="text-green-500" size={20} />,
            commands: [
                "sudo useradd --no-create-home --shell /bin/false prometheus",
                "mkdir /etc/prometheus /var/lib/prometheus",
                "wget https://github.com/prometheus/prometheus/releases/latest/download/prometheus-linux-amd64.tar.gz"
            ],
            description: "Create a dedicated user for Prometheus and download the latest release."
        },
        {
            title: "Installing Node Exporter",
            icon: <Terminal className="text-green-500" size={20} />,
            commands: [
                "wget https://github.com/prometheus/node_exporter/releases/latest/download/node_exporter-linux-amd64.tar.gz",
                "tar xvf node_exporter-linux-amd64.tar.gz",
                "mv node_exporter-linux-amd64/node_exporter /usr/local/bin/"
            ],
            description: "Install Node Exporter to collect system metrics from your servers."
        },
        {
            title: "Installing Grafana",
            icon: <BarChart2 className="text-green-500" size={20} />,
            commands: [
                "sudo apt install -y software-properties-common",
                "wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -",
                "sudo apt update && sudo apt install grafana"
            ],
            description: "Set up Grafana for creating beautiful, dynamic dashboards."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto bg-transparent rounded-lg shadow-lg overflow-hidden border border-gray-800">
            {/* Header */}
            <div className="bg-gradient-to-r  text-white p-6 border-b border-gray-800">
                <h1 className="text-2xl font-bold mb-2">
                    Network Monitoring with Zabbix, Prometheus, and Grafana
                </h1>
                <p className="text-gray-400">
                    A Comprehensive Guide for Real-Time Network Monitoring
                </p>
            </div>

            {/* Introduction */}
            <div className="p-6">
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 text-white">Introduction</h2>
                    <p className="mb-4 text-gray-400">
                        Effective network monitoring is crucial for maintaining optimal performance and security.
                        In this guide, I will walk you through my project of deploying and configuring Zabbix,
                        Prometheus, and Grafana for real-time network monitoring.
                    </p>
                </div>

                {/* Why section */}
                <div className="p-4 rounded-lg mb-8 border border-gray-800">
                    <h2 className="text-lg font-bold mb-3 text-white">
                        Why Zabbix, Prometheus, and Grafana?
                    </h2>
                    <div className="space-y-2">
                        <div className="flex items-start">
                            <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                            <p className="text-gray-400">
                                <span className="font-medium text-white">Zabbix</span> is a powerful open-source monitoring solution
                                that provides in-depth insights into network activity.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                            <p className="text-gray-400">
                                <span className="font-medium text-white">Prometheus</span> is a leading time-series database designed
                                for high-performance monitoring.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <CheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" size={16} />
                            <p className="text-gray-400">
                                <span className="font-medium text-white">Grafana</span> enhances visualization with customizable dashboards.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Prerequisites */}
                <div className="mb-8">
                    <h2 className="text-lg font-bold mb-3 text-white">Prerequisites</h2>
                    <ul className="list-disc pl-6 space-y-1 text-gray-400">
                        <li>A Linux-based server (Ubuntu 20.04 recommended)</li>
                        <li>Root or sudo access</li>
                        <li>A stable network environment</li>
                    </ul>
                </div>

                {/* Installation Steps */}
                <h2 className="text-xl font-bold mb-4 text-white">
                    Implementation Steps
                </h2>

                <div className="space-y-6 mb-8">
                    {steps.map((step, index) => (
                        <div key={index} className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900">
                            <div className="flex items-center bg-gray-800 p-3 border-b border-gray-700">
                                {step.icon}
                                <h3 className="font-bold ml-2 text-white">Step {index + 1}: {step.title}</h3>
                            </div>
                            <div className="p-4">
                                <p className="mb-3 text-gray-400">{step.description}</p>
                                <div className="bg-black text-gray-300 p-3 rounded-md text-sm font-mono overflow-x-auto border border-gray-800">
                                    {step.commands.map((cmd, cmdIndex) => (
                                        <div key={cmdIndex} className="mb-1 last:mb-0">$ {cmd}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Conclusion */}
                <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                    <h2 className="text-lg font-bold mb-3 text-white">Conclusion</h2>
                    <p className="mb-3 text-gray-400">
                        With Zabbix handling infrastructure monitoring, Prometheus gathering time-series data,
                        and Grafana providing detailed visualizations, you now have a powerful network monitoring solution.
                    </p>
                    <p className="text-gray-400">
                        This setup ensures proactive network management, helping to identify and resolve issues
                        before they impact operations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NetworkMonitoringBlog;