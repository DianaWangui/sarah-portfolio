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

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    
    // Add animation effect for submission feedback
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-transparent px-6 md:px-10 lg:px-[10%] mt-12 lg:mt-24 mb-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            For technical consultation & solution design in VoIP systems, IP Telephony, FTTH Solution, 
            Dahua Security Systems, Security and Network monitoring.
          </motion.p>
        </div>

        {/* Contact Form Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8 shadow-2xl"
        >
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div className="relative flex-1 group" variants={itemVariants}>
                  <label className="text-sm text-gray-500 mb-1 block ml-1">Your Name</label>
                  <div className={`relative overflow-hidden rounded-lg ${focused.name ? 'ring-2 ring-green-500' : 'ring-1 ring-gray-700'} transition-all duration-300`}>
                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${focused.name || formData.name ? 'text-green-500' : 'text-gray-500'}`} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Silvia Njeru"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={() => handleBlur('name')}
                      className="w-full pl-10 p-3 bg-gray-800/50 text-white border-0 outline-none placeholder:text-gray-600"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div className="relative flex-1 group" variants={itemVariants}>
                  <label className="text-sm text-gray-500 mb-1 block ml-1">Email Address</label>
                  <div className={`relative overflow-hidden rounded-lg ${focused.email ? 'ring-2 ring-green-500' : 'ring-1 ring-gray-700'} transition-all duration-300`}>
                    <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${focused.email || formData.email ? 'text-green-500' : 'text-gray-500'}`} />
                    <input
                      type="email"
                      name="email"
                      placeholder="myemail@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      className="w-full pl-10 p-3 bg-gray-800/50 text-white border-0 outline-none placeholder:text-gray-600"
                      required
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div className="relative group" variants={itemVariants}>
                <label className="text-sm text-gray-500 mb-1 block ml-1">Phone Number</label>
                <div className={`relative overflow-hidden rounded-lg ${focused.phone ? 'ring-2 ring-green-500' : 'ring-1 ring-gray-700'} transition-all duration-300`}>
                  <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${focused.phone || formData.phone ? 'text-green-500' : 'text-gray-500'}`} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+254 743966928"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={() => handleBlur('phone')}
                    className="w-full pl-10 p-3 bg-gray-800/50 text-white border-0 outline-none placeholder:text-gray-600"
                    required
                  />
                </div>
              </motion.div>

              <motion.div className="relative group" variants={itemVariants}>
                <label className="text-sm text-gray-500 mb-1 block ml-1">Your Message</label>
                <div className={`relative overflow-hidden rounded-lg ${focused.message ? 'ring-2 ring-green-500' : 'ring-1 ring-gray-700'} transition-all duration-300`}>
                  <MessageSquare className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-300 ${focused.message || formData.message ? 'text-green-500' : 'text-gray-500'}`} />
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    className="w-full pl-10 p-3 bg-gray-800/50 text-white border-0 outline-none placeholder:text-gray-600"
                    rows="4"
                    required
                  ></textarea>
                </div>
              </motion.div>

              <motion.div 
                className="pt-2"
                variants={itemVariants}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative flex items-center justify-center gap-2 w-full
                           bg-gradient-to-r from-green-500 to-emerald-600
                           text-white p-3 rounded-lg font-medium
                           hover:from-green-600 hover:to-emerald-700
                           transition-all duration-300 overflow-hidden
                           ${isSubmitting ? 'cursor-not-allowed opacity-90' : ''}`}
                >
                  <span className={`flex items-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                    Send Message <Send className="h-5 w-5" />
                  </span>
                  
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>

        {/* Optional Contact Info Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <div className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300">
            <Mail className="h-5 w-5 mr-2" />
            <span>sarahgichuru@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300">
            <Phone className="h-5 w-5 mr-2" />
            <span>+254 743966928</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;