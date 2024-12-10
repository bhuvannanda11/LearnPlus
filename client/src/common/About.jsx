import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* About Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gold-900">About Us</h1>
        <p className="text-xl text-gray-600">Learn more about our mission and values</p>
      </div>

      {/* About Content */}
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gold-900">Our Mission</h2>
          <p className="text-lg text-gray-700">
            We are committed to providing the best services to our customers. Our mission is to
            create high-quality products that solve real-world problems and make life easier for
            everyone.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gold-900">Our Values</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Customer-centric approach</li>
            <li>Innovation and creativity</li>
            <li>Integrity and transparency</li>
            <li>Sustainability and responsibility</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gold-900">Our Team</h2>
          <p className="text-lg text-gray-700">
            Our team consists of passionate and dedicated individuals who work hard to ensure that
            our products and services meet the highest standards. We believe in collaboration and
            continuous learning.
          </p>
        </section>
      </div>

      {/* Contact Us Button */}
      <div className="mt-8 text-center">
        <a
          href="/contact"
          className="inline-block py-3 px-6 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default About;
