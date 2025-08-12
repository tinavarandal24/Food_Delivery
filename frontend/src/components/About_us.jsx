import React from 'react';

const About_us = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-red-400 mb-10">About Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Who We Are</h2>
        <p className="text-gray-700 leading-7">
          We are a passionate team dedicated to building meaningful web experiences.
          Our aim is to provide users with fast, secure, and user-friendly solutions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-7">
          To deliver high-quality services with honesty, innovation, and customer satisfaction at the core.
          We believe in building trust and long-term relationships with our users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Quick & Reliable Service</li>
          <li>Customer-Centric Approach</li>
          <li>Continuous Improvements</li>
          <li>Transparent Communication</li>
        </ul>
      </section>

      <div className="text-center mt-10">
        <p className="text-lg text-gray-800">
          Thank you for being part of our journey. We look forward to growing with you!
        </p>
      </div>
    </div>
  );
};

export default About_us;