import React from 'react';
import { CheckCircle, Terminal, BarChart2, Server, Workflow, Database, ArrowRight } from 'lucide-react';

const NetworkMonitoringBlog = () => {
    const steps = [
        {
            title: "Installing Zabbix",
            icon: <Server className="text-green-500" size={20} />,
            commands: [
                "sudo apt update && sudo apt upgrade -y",
                "sudo apt install zabbix-server-mysql zabbix-frontend-php zabbix-apache-conf zabbix-agent"
            ],
            description: "Start by updating your system and installing the Zabbix server, frontend, and agent.",
            additionalContent: [
                {
                    title: "Configure the Database",
                    commands: [
                        "sudo mysql -u root -p",
                        "CREATE DATABASE zabbix character set utf8 collate utf8_bin;",
                        "CREATE USER 'zabbix'@'localhost' IDENTIFIED BY 'password';",
                        "GRANT ALL PRIVILEGES ON zabbix.* TO 'zabbix'@'localhost';",
                        "FLUSH PRIVILEGES;",
                        "EXIT;"
                    ],
                    description: "Create and configure the MySQL database for Zabbix."
                },
                {
                    title: "Import Initial Schema",
                    commands: [
                        "zcat /usr/share/doc/zabbix-server-mysql*/create.sql.gz | mysql -u zabbix -p zabbix"
                    ],
                    description: "Import the initial database schema for Zabbix."
                },
                {
                    title: "Configure Zabbix Server",
                    commands: [
                        "# Edit /etc/zabbix/zabbix_server.conf:",
                        "DBPassword=password",
                        "sudo systemctl restart zabbix-server zabbix-agent apache2",
                        "sudo systemctl enable zabbix-server zabbix-agent apache2"
                    ],
                    description: "Set up the database password and enable Zabbix services to start on boot."
                }
            ]
        },
        {
            title: "Installing Prometheus",
            icon: <Workflow className="text-green-500" size={20} />,
            commands: [
                "sudo useradd --no-create-home --shell /bin/false prometheus",
                "mkdir /etc/prometheus /var/lib/prometheus",
                "chown prometheus:prometheus /etc/prometheus /var/lib/prometheus",
                "wget https://github.com/prometheus/prometheus/releases/latest/download/prometheus-linux-amd64.tar.gz",
                "tar xvf prometheus-linux-amd64.tar.gz",
                "mv prometheus-linux-amd64/prometheus /usr/local/bin/",
                "mv prometheus-linux-amd64/promtool /usr/local/bin/"
            ],
            description: "Create a dedicated user for Prometheus and download the latest release.",
            additionalContent: [
                {
                    title: "Create a Prometheus Service",
                    commands: [
                        "# Create service file at /etc/systemd/system/prometheus.service:",
                        "[Unit]",
                        "Description=Prometheus Monitoring",
                        "After=network.target",
                        "",
                        "[Service]",
                        "User=prometheus",
                        "ExecStart=/usr/local/bin/prometheus --config.file=/etc/prometheus/prometheus.yml",
                        "Restart=always",
                        "",
                        "[Install]",
                        "WantedBy=multi-user.target"
                    ],
                    description: "Create a systemd service file to manage Prometheus."
                },
                {
                    title: "Start Prometheus Service",
                    commands: [
                        "sudo systemctl daemon-reload",
                        "sudo systemctl enable --now prometheus"
                    ],
                    description: "Reload systemd configuration and enable Prometheus service."
                }
            ]
        },
        {
            title: "Installing Node Exporter",
            icon: <Terminal className="text-green-500" size={20} />,
            commands: [
                "wget https://github.com/prometheus/node_exporter/releases/latest/download/node_exporter-linux-amd64.tar.gz",
                "tar xvf node_exporter-linux-amd64.tar.gz",
                "mv node_exporter-linux-amd64/node_exporter /usr/local/bin/"
            ],
            description: "Install Node Exporter to collect system metrics from your servers.",
            additionalContent: [
                {
                    title: "Create Node Exporter Service",
                    commands: [
                        "# Create service file at /etc/systemd/system/node_exporter.service:",
                        "[Unit]",
                        "Description=Node Exporter",
                        "After=network.target",
                        "",
                        "[Service]",
                        "User=node_exporter",
                        "ExecStart=/usr/local/bin/node_exporter",
                        "Restart=always",
                        "",
                        "[Install]",
                        "WantedBy=multi-user.target"
                    ],
                    description: "Create a systemd service file for Node Exporter."
                },
                {
                    title: "Start Node Exporter Service",
                    commands: [
                        "sudo systemctl daemon-reload",
                        "sudo systemctl enable --now node_exporter"
                    ],
                    description: "Enable and start the Node Exporter service."
                }
            ]
        },
        {
            title: "Installing Grafana",
            icon: <BarChart2 className="text-green-500" size={20} />,
            commands: [
                "sudo apt install -y software-properties-common",
                "wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -",
                "echo \"deb https://packages.grafana.com/oss/deb stable main\" | sudo tee -a /etc/apt/sources.list.d/grafana.list",
                "sudo apt update && sudo apt install grafana"
            ],
            description: "Set up Grafana for creating beautiful, dynamic dashboards.",
            additionalContent: [
                {
                    title: "Start Grafana Service",
                    commands: [
                        "sudo systemctl enable --now grafana-server"
                    ],
                    description: "Enable and start the Grafana server."
                }
            ]
        },
        {
            title: "Connecting Prometheus to Grafana",
            icon: <Database className="text-green-500" size={20} />,
            commands: [],
            description: "Configure Prometheus as a data source in Grafana.",
            additionalContent: [
                {
                    title: "Configure Data Source",
                    description: "Log into Grafana (http://your-server-ip:3000) and follow these steps:",
                    list: [
                        "Go to Configuration > Data Sources",
                        "Click Add data source and select Prometheus",
                        "Enter the Prometheus server URL (http://your-server-ip:9090)",
                        "Click Save & Test"
                    ]
                }
            ]
        },
        {
            title: "Creating Dashboards",
            icon: <BarChart2 className="text-green-500" size={20} />,
            commands: [],
            description: "Create custom dashboards to visualize your monitoring data.",
            additionalContent: [
                {
                    title: "Set Up a Dashboard",
                    description: "To create a new dashboard:",
                    list: [
                        "Navigate to Dashboards > Manage > New Dashboard",
                        "Add a panel and select Prometheus as the data source",
                        "Configure metrics like CPU load, network traffic, and memory usage",
                        "Save and customize the dashboard"
                    ]
                }
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto bg-transparent rounded-lg shadow-lg overflow-hidden border border-gray-800">
            {/* Header */}
            <div className="bg-gradient-to-r text-white p-6 border-b border-gray-800">
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
                        Prometheus, and Grafana for real-time network monitoring. By the end of this guide, 
                        you will have a robust setup capable of monitoring network traffic, performance, and 
                        security events.
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
                    <p className="mt-4 text-gray-400">
                        Together, they create a comprehensive monitoring system.
                    </p>
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
                                
                                {step.commands.length > 0 && (
                                    <div className="bg-black text-gray-300 p-3 rounded-md text-sm font-mono overflow-x-auto border border-gray-800 mb-4">
                                        {step.commands.map((cmd, cmdIndex) => (
                                            <div key={cmdIndex} className="mb-1 last:mb-0">$ {cmd}</div>
                                        ))}
                                    </div>
                                )}
                                
                                {step.additionalContent && step.additionalContent.map((content, contentIndex) => (
                                    <div key={contentIndex} className="mt-4 pl-4 border-l border-gray-700">
                                        <h4 className="font-medium text-white mb-2">{content.title}</h4>
                                        {content.description && <p className="mb-2 text-gray-400">{content.description}</p>}
                                        
                                        {content.commands && content.commands.length > 0 && (
                                            <div className="bg-black text-gray-300 p-3 rounded-md text-sm font-mono overflow-x-auto border border-gray-800 mb-3">
                                                {content.commands.map((cmd, cmdIndex) => (
                                                    <div key={cmdIndex} className="mb-1 last:mb-0">
                                                        {cmd.startsWith('#') ? cmd : `$ ${cmd}`}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {content.list && content.list.length > 0 && (
                                            <ul className="list-none space-y-1 text-gray-400 ml-1">
                                                {content.list.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="flex items-start">
                                                        <ArrowRight className="text-green-500 mt-1 mr-2 flex-shrink-0" size={12} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
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
                    <p className="mb-3 text-gray-400">
                        This setup ensures proactive network management, helping to identify and resolve issues
                        before they impact operations.
                    </p>
                    <p className="text-gray-400">
                        Stay tuned for more insights into optimizing network performance!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NetworkMonitoringBlog;