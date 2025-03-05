import React from 'react';
import Image from 'next/image';

// Import images (I'll keep the imports as they were in the original code)
import grafana from '../../../public/Images/grafana.jpeg';
import kvm from '../../../public/Images/kvm.png';
import linux from '../../../public/Images/linux.jpeg';
import mikrotik from '../../../public/Images/mikrotik.png';
import prometheus from '../../../public/Images/prometheus.png';
import sngrep from '../../../public/Images/promox.png';
import wireshark from '../../../public/Images/wireshark.jpeg';
import zabbix from '../../../public/Images/zabbixlogo.png';
import ToolsIcon from "@mui/icons-material/HandymanOutlined"; // Added Tools icon


const ToolsGrid = () => {
    const tools = [
        { image: grafana, name: 'Grafana' },
        { image: kvm, name: 'KVM' },
        { image: linux, name: 'Linux' },
        { image: mikrotik, name: 'Mikrotik' },
        { image: prometheus, name: 'Prometheus' },
        { image: sngrep, name: 'Sngrep' },
        { image: wireshark, name: 'Wireshark' },
        { image: zabbix, name: 'Zabbix' }
    ];

    return (
        <div className="w-[90%] m-auto mt-8 lg:mt-20  pl-[10%] pr-[14%]">
            <h4 className="text-sm font-light lg:border border-gray-[500]
                     text-[#dddddd] py-2 px-4 lg:mb-12 w-[120px] lg:text-center
                     flex lg:justify-center lg:items-center gap-2 decoration-inherit
                    hover:border-gray-200 font-Poppins rounded-full mb-4">
                <ToolsIcon className="h-5 w-5" />
                TOOLS
            </h4>
            <div className="grid grid-cols-3 gap-8">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md flex items-center justify-center p-6 hover:scale-105 transition-transform duration-300"
                    >
                        <Image
                            src={tool.image}
                            alt={tool.name}
                            width={100}
                            height={100}
                            className="object-contain"
                        />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToolsGrid;