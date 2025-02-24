'use client';

import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="bg-transparent pl-[10%] pr-[14%] mt-8 lg:mt-20 mb-8">
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm font-light lg:border border-gray-[700]
                   text-[#dddddd] py-2 px-4 mb-12 w-[20%] text-nowrap
                   flex items-center gap-2 decoration-inherit
                   hover:border-gray-200 font-Poppins rounded-full"
      >
        CONTACT
      </motion.h4>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 mb-8 max-w-2xl"
      >
        FOR Technical consultation & Solution Design in (VoIP systems, IP Telephony, FTTH Solution, Dahua Security Systems, Security and Network monitoring)
      </motion.p>

      <motion.form 
        onSubmit={handleSubmit} 
        className="max-w-2xl space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 p-3 border border-gray-700 rounded-lg
                       bg-gray-800/30 text-white
                       focus:outline-none focus:border-gray-500
                       focus:ring-1 focus:ring-gray-500
                       placeholder:text-gray-500 transition-all duration-300"
              required
            />
          </div>

          <div className="relative flex-1">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 p-3 border border-gray-700 rounded-lg
                       bg-gray-800/30 text-white
                       focus:outline-none focus:border-gray-500
                       focus:ring-1 focus:ring-gray-500
                       placeholder:text-gray-500 transition-all duration-300"
              required
            />
          </div>
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 p-3 border border-gray-700 rounded-lg
                     bg-gray-800/30 text-white
                     focus:outline-none focus:border-gray-500
                     focus:ring-1 focus:ring-gray-500
                     placeholder:text-gray-500 transition-all duration-300"
            required
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-10 p-3 border border-gray-700 rounded-lg
                     bg-gray-800/30 text-white
                     focus:outline-none focus:border-gray-500
                     focus:ring-1 focus:ring-gray-500
                     placeholder:text-gray-500 transition-all duration-300"
            rows="4"
            required
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 w-full
                     bg-gradient-to-r from-green-500 to-emerald-600
                     text-white p-3 rounded-lg
                     hover:from-green-600 hover:to-emerald-700
                     transition-all duration-300 font-medium"
        >
          Send Message
          <Send className="h-5 w-5" />
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;