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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
  
    try {
      // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree form ID
      // For example: https://formspree.io/f/xrgdkpay
      const response = await fetch('https://formspree.io/f/moveaorp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        // Show success message
        setIsSubmitted(true);
        resetForm();
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setError('There was a problem submitting your form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            I'm always excited to connect with like-minded professionals, potential collaborators, and anyone interested in leveraging technology to drive success. Whether you have a project in mind, need advice on <span className="text-[#FFEFC8]">VoIP, Cybersecurity, or IT Infrastructure</span>, or just want to chat about the latest tech trends, I'd love to hear from you!
            <br/><br/>
            I'm currently open to <span className="text-[#FFEFC8]">new opportunities, freelance projects, and consulting work</span>. If you're looking for expertise in <span className="text-[#FFEFC8]">VoIP, cloud infrastructure, or network security</span>, let's discuss how I can help your team or business!
            <br/><br/>
            Feel free to reach out via the form below, or connect with me on LinkedIn, Email or WhatsApp. I typically respond within 24-48 hours. Let's build something amazing together!
          </motion.p>
        </div>

        {/* Contact Form Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-xl border border-gray-800 p-6 md:p-8 shadow-2xl"
        >
          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-6 text-center mb-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-6 text-center mb-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Oops!</h3>
              <p className="text-gray-400">{error}</p>
            </motion.div>
          )}

          {/* Form - Always rendered */}
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
        </motion.div>

        {/* Optional Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-8"
        >
          <div className="relative group">
            <a 
              href="mailto:sarahgichuru55@gmail.com"
              className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gray-800 p-3 rounded-full mr-3">
                <Mail className="h-6 w-6" />
              </div>
              <span>Email Me</span>
            </a>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Click to email me
            </div>
          </div>
          
          <div className="relative group">
            <a 
              href="https://wa.me/254741173015" 
              className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gray-800 p-3 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span>WhatsApp</span>
            </a>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Click to WhatsApp me
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;