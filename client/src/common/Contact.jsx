import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Contact Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gold-900">Contact Us</h1>
        <p className="text-xl text-gray-600">We'd love to hear from you!</p>
      </div>

      {/* Contact Form */}
      <form className="space-y-6">
        {/* Name Input */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-lg font-semibold text-gold-900">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            required
          />
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-lg font-semibold text-gold-900">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            required
          />
        </div>

        {/* Message Textarea */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-lg font-semibold text-gold-900">Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-gold-900 text-white font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
