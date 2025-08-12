import React from 'react';

const Contact_us = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-10 max-w-7xl mx-auto font-primary">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-primary">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <form className="flex flex-col space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition duration-300 w-fit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-red-50 p-6 rounded-2xl shadow-md space-y-5 text-gray-800 text-[15px]">
          <div>
            <p className="text-lg font-semibold mb-2">📍 Address</p>
            <p>Nashik, Maharashtra, India</p>
          </div>

          <div>
            <p className="text-lg font-semibold mb-2">📞 Phone</p>
            <p>+91 9913793794</p>
          </div>

          <div>
            <p className="text-lg font-semibold mb-2">✉️ Email</p>
            <p>contact@tomato.com</p>
          </div>

          <div>
            <p className="text-lg font-semibold mb-2">🔗 Follow us</p>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-red-500">🌐</a>
              <a href="#" className="hover:text-red-500">📘</a>
              <a href="#" className="hover:text-red-500">📸</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
