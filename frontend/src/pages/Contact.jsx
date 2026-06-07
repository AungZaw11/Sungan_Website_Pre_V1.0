import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaPhone, FaEnvelope, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

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
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! We will contact you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsLoading(false);
    }
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
              {/* Status Message */}
              {status.message && (
                <div className={`p-4 rounded-lg flex items-center gap-3 ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {status.type === 'success' ? (
                    <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <FaExclamationCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-heading font-medium mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  placeholder="Your name"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-heading font-medium mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  placeholder="your@email.com"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-heading font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 text-white rounded-lg font-medium transition-all ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-red-600 hover:bg-red-700 active:scale-98'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
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
              <div className="w-1 h-16 bg-red-600" />
              <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(to bottom, #dc2626, #0077BE)` }}>
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>

            {/* Seoul Office */}
            <div className="absolute top-[35%] right-[30%] flex flex-col items-center">
              <div className="px-6 py-2 text-white rounded-badge font-semibold text-lg mb-2 shadow-lg" style={{ background: `linear-gradient(to bottom, #dc2626, #0077BE)` }}>
                Seoul Office
              </div>
              <div className="w-1 h-16 bg-red-600" />
              <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(to bottom, #dc2626, #0077BE)` }}>
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>

            {/* Head Office (Busan) */}
            <div className="absolute top-[45%] right-[25%] flex flex-col items-center">
              <div className="px-6 py-2 text-white rounded-badge font-semibold text-lg mb-2 shadow-lg" style={{ background: `linear-gradient(to bottom, #dc2626, #0077BE)` }}>
                Head Office (Busan)
              </div>
              <div className="w-1 h-16 bg-red-600" />
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