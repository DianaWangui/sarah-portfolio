"use client";

import React, { useState } from "react";

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
      {/* Title */}
      <h4 className="text-lg font-bold border border-[#dddddd] text-[#dddddd] py-2 px-4 w-[132px] text-center hover:border-gray-200 mb-12 font-Poppins rounded-full">
        Contact
      </h4>

      <p className="text-gray-400 mb-6">
        FOR Technical consultation & Solution Design in (VoIP systems, IP Telephony, FTTH Solution, Dahua Security Systems, Security and Network monitoring)
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded bg-transparent text-white focus:outline-none focus:border-gray-300"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded bg-transparent text-white focus:outline-none focus:border-gray-300"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded bg-transparent text-white focus:outline-none focus:border-gray-300"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded bg-transparent text-white focus:outline-none focus:border-gray-300"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
