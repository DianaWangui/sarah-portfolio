import React from 'react';
import grafana from '../../../public/Images/grafana.jpeg';
import kvm from '../../../public/Images/kvm.png';
import linux from '../../../public/Images/linux.jpeg';
import mikrotik from '../../../public/Images/mikrotik.png';
import prometheus from '../../../public/Images/prometheus.png';
import sngrep from '../../../public/Images/promox.png';
import wireshark from '../../../public/Images/wireshark.jpeg';
import zabbix from '../../../public/Images/zabbixlogo.png';
import Image from 'next/image';

const InfiniteScrollAnimation = () => {
    const items = [
        grafana, kvm, linux, mikrotik, prometheus, sngrep, wireshark, zabbix
    ];

    return (
        <div className="w-[90%] m-auto overflow-hidden pl-[5%] pr-[14%] mt-8 lg:mt-20">
            <h4 className="text-sm border border-[#dddddd] text-[#dddddd] py-2 px-4 w-[132px] text-center hover:border-gray-200 mb-12 font-Poppins rounded-full">
                TOOLS
            </h4>
            <div className="relative w-full overflow-hidden">
                {/* Wrapper for animation */}
                <div className="flex animate-marquee">
                    {/* First set of items */}
                    {items.map((item, index) => (
                        <div
                            key={`item-1-${index}`}
                            className="flex-shrink-0 w-30 h-30 mx-4 bg-white rounded flex items-center justify-center"
                        >
                            <Image
                                src={item}
                                alt={`Tool ${index + 1}`}
                                width={100}
                                height={100}
                                className="object-contain p-2"
                            />
                        </div>
                    ))}

                    {/* Duplicate set for seamless looping */}
                    {items.map((item, index) => (
                        <div
                            key={`item-2-${index}`}
                            className="flex-shrink-0 w-40 h-40 mx-4 bg-white rounded-lg flex items-center justify-center"
                        >
                            <Image
                                src={item}
                                alt={`Tool ${index + 1}`}
                                width={120}
                                height={120}
                                className="object-contain p-2"
                            />
                        </div>
                    ))}

                    {/* Add a third set to ensure continuous looping */}
                    {items.map((item, index) => (
                        <div
                            key={`item-3-${index}`}
                            className="flex-shrink-0 w-40 h-40 mx-4 bg-white rounded-lg flex items-center justify-center"
                        >
                            <Image
                                src={item}
                                alt={`Tool ${index + 1}`}
                                width={120}
                                height={120}
                                className="object-contain p-2"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-66.666%);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
          width: fit-content;
        }
      `}</style>
        </div>
    );
};

export default InfiniteScrollAnimation;