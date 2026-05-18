import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaPhone, FaEnvelope } from 'react-icons/fa';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col w-full">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.h1 {...fadeIn} className="text-4xl md:text-5xl font-semibold mb-16 text-primary">
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="flex gap-6 items-start">
              <FaBuilding className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-body font-medium mb-1">Head Office :</h3>
                <p className="text-body text-lg">
                  5fl Dong-il Bldg, 12-3, Jungang-daero 180beon-gil, Dong-gu, Busan
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <FaPhone className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-body font-medium mb-1">Tel No :</h3>
                <p className="text-body text-lg">+ 82-51-462-2227</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <FaEnvelope className="w-6 h-6 mt-1 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-body font-medium mb-1">Email :</h3>
                <p className="text-body text-lg">smd@sungan.kr</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[14px] shadow-md border border-gray-200 space-y-6">
              <div>
                <label htmlFor="name" className="block text-heading font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-heading font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-heading font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-white rounded-lg font-medium transition-colors bg-red hover:bg-red-dark"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[600px] bg-surface rounded-[14px] overflow-hidden border border-gray-100"
        >
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2940&auto=format&fit=crop"
            alt="World Map"
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0">
            {/* Yangon Office */}
            <div className="absolute top-[60%] left-[25%] flex flex-col items-center">
              <div className="px-6 py-2 text-white rounded-badge font-semibold text-lg mb-2 shadow-lg" style={{ background: `linear-gradient(to bottom, #dc2626, #0077BE)` }}>
                Yangon Office
              </div>
              <div className="w-1 h-16 bg-red" />
              <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(to bottom, #dc2626, #0077BE)` }}>
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>

            {/* Seoul Office */}
            <div className="absolute top-[35%] right-[30%] flex flex-col items-center">
              <div className="px-6 py-2 text-white rounded-badge font-semibold text-lg mb-2 shadow-lg" style={{ background: `linear-gradient(to bottom, #dc2626, #0077BE)` }}>
                Seoul Office
              </div>
              <div className="w-1 h-16 bg-red" />
              <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(to bottom, #dc2626, #0077BE)` }}>
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>

            {/* Head Office (Busan) */}
            <div className="absolute top-[45%] right-[25%] flex flex-col items-center">
              <div className="px-6 py-2 text-white rounded-badge font-semibold text-lg mb-2 shadow-lg" style={{ background: `linear-gradient(to bottom, #dc2626, #0077BE)` }}>
                Head Office (Busan)
              </div>
              <div className="w-1 h-16 bg-red" />
              <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(to bottom, #dc2626, #0077BE)` }}>
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}