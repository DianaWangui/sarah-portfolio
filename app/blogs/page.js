'use client';
import React, { useState } from 'react';
import CloudPBXBlog from './components/CloudPBXBlog';
import NetworkMonitoringBlog from './components/NetworkMonitoringBlog';
import { BookOpen, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BlogPage = () => {

  const blogs = [
    {
      id: 'cloud-pbx',
      img: '/Images/image.png',
      title: 'Cloud PBX BYOI Deployment Solution',
      excerpt: 'Empower your business with a fully customizable, self-hosted P Series Cloud PBX solution.',
      date: 'February 28, 2025',
      tag: 'Infrastructure',
      component: <CloudPBXBlog />
    },
    {
      id: 'network-monitoring',
      title: 'Network Monitoring with Zabbix, Prometheus, and Grafana',
      excerpt: 'A comprehensive guide for real-time network monitoring using open-source tools.',
      date: 'February 20, 2025',
      tag: 'Networking',
      component: <NetworkMonitoringBlog />
    }
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="min-h-screen bg-[#1F1F1F] py-12 px-4 sm:px-6 lg:px-[20%]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col  mb-8  border-gray-800">
          <h1 className="text-4xl font-bont text-white mb-8">Blog</h1>
          <nav className="text-gray-600 mb-4 flex items-center">
            <Link href="/" className="hover:underlin text-sm hover:text-green-500">HOME</Link>
            <span className="text-gray-500 flex items-center text-sm"><ArrowForwardIosIcon className='text-sm mx-2' /></span>
            <span className="text-gray-300 text-sm">BLOG</span>
          </nav>
        </div>
        {selectedBlog ? (
          <div>
            <button
              onClick={() => setSelectedBlog(null)}
              className="mb-4 flex items-center text-green-500 hover:text-green-400 transition-colors duration-300"
            >
              <ChevronRight className="transform rotate-180 mr-1" size={16} />
              Back to all posts
            </button>
            {blogs.find(blog => blog.id === selectedBlog)?.component}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-1 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-transparent border border-gray-500"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-900 text-green-300 rounded-md">
                        {blog.tag}
                      </span>
                      <span className="text-sm text-gray-500">{blog.date}</span>
                    </div>
                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-white">{blog.title}</h3>
                    <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                    <button
                      onClick={() => setSelectedBlog(blog.id)}
                      className="flex items-center text-green-500 hover:text-green-400 transition-colors duration-300"
                    >
                      <BookOpen size={16} className="mr-1" />
                      Read full article
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;